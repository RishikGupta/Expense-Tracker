$( document ).ready(function() {
    const CategoryData = [];
    CategoryData.push("Clothes");
    CategoryData.push("Eating Out");
    CategoryData.push("Entertainment");
    CategoryData.push("Fuel");
    CategoryData.push("General");
    CategoryData.push("Holidays");
    CategoryData.push("Kids");
    CategoryData.push("Shopping");
     
    localStorage.setItem("CategoryData", JSON.stringify(CategoryData));
    let fetchedCategoryData = JSON.parse(localStorage.getItem("CategoryData") || "[]");
    let fetchedIncomeData = JSON.parse(localStorage.getItem("IncomeData") || "[]");
    let fetchedExpenseData = JSON.parse(localStorage.getItem("ExpenseData") || "[]");

    let userEmail = sessionStorage.getItem("fetchEmail");
    let userName = sessionStorage.getItem("fetchUserName");
    let fetchedCustomerData = JSON.parse(localStorage.getItem("CustomerData") || "[]");
    $("#greeting").text("Welcome "+userName+" to your Expense Tracker!");

    let totalIncome = 0;
    let totalExpenses = 0;
    let categorywiseExpenses = [];
    
    let combinedExpensesAll = [];
    
    for (let i = 0; i < fetchedIncomeData.length;i++) {
        if(fetchedIncomeData[i].email==userEmail){
            totalIncome += parseInt(fetchedIncomeData[i].amount);
        }
      }
      for (let i = 0; i < fetchedExpenseData.length;i++) {
        if(fetchedExpenseData[i].email==userEmail){
            totalExpenses += parseInt(fetchedExpenseData[i].amount);
            let calculation = ((parseInt(fetchedExpenseData[i].amount)/parseInt(totalIncome))*100).toFixed(2);
            const categoryData = {
                category: fetchedExpenseData[i].category,
                cal: calculation
            };
            categorywiseExpenses.push(categoryData);
        }
      }
      
      for(let i = 0;i<CategoryData.length;i++){
        let combinedExpenses = 0;
        let catogy = "";
        debugger
        for(let j = 0; j < categorywiseExpenses.length;j++){
            if(categorywiseExpenses[j].category==CategoryData[i])
            {
                catogy = categorywiseExpenses[j].category;
                combinedExpenses += ((parseFloat(categorywiseExpenses[j].cal)));
            }
            
        }
        const data = {
            category: catogy,
            combinedExp: combinedExpenses.toFixed(2)
        };
        if(data.category!=""){
            combinedExpensesAll.push(data);
        }
        
      }
      console.log(combinedExpensesAll);

      window.onload = function () {
        var dataPoints = [];

        // Construct dataPoints array from combinedExpensesAll
        for (var i = 0; i < combinedExpensesAll.length; i++) {
            dataPoints.push({ y: parseFloat(combinedExpensesAll[i].combinedExp), label: combinedExpensesAll[i].category });
        }
    
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title:{
                text: "Category wise expenses.",
                horizontalAlign: "left"
            },
            data: [{
                type: "doughnut",
                startAngle: 60,
                //innerRadius: 60,
                indexLabelFontSize: 17,
                indexLabel: "{label} - #percent%",
                toolTipContent: "<b>{label}:</b> {y} (#percent%)",
                dataPoints: dataPoints
                
            }]
        });
        chart.render();
        
        }
      
});



function goToAddIncome() {
    window.location.href = 'income.html';
}

function goToAddExpense() {
    window.location.href = 'expense.html';
}
