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

    let userEmail = localStorage.getItem("fetchEmail");
    let userName = localStorage.getItem("fetchUserName");
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
      $("#income_card").text(totalIncome);
      $("#expense_card").text(totalExpenses);
     fetchChart(combinedExpensesAll);
    
      
});



function goToAddIncome() {
    window.location.href = 'income.html';
}

function goToAddExpense() {
    window.location.href = 'expense.html';
}

function fetchChart(combinedExpensesAll){
    const category=[];
    const combinedExpenses=[];
    for(let i =0;i<combinedExpensesAll.length;i++){
        category.push(combinedExpensesAll[i].category);
        combinedExpenses.push(combinedExpensesAll[i].combinedExp);
    }
    let rownum = combinedExpenses.length;

    const backgroundColor = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)', // Additional color
        'rgba(255, 0, 0, 0.6)',    // Additional color
        'rgba(0, 255, 0, 0.6)',    // Additional color
        'rgba(0, 0, 255, 0.6)',    // Additional color
        'rgba(255, 255, 0, 0.6)',  // Additional color
        'rgba(0, 255, 255, 0.6)',  // Additional color
        'rgba(255, 0, 255, 0.6)'   // Additional color
    ];

    const borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(255, 255, 0, 1)',
        'rgba(0, 255, 255, 1)',
        'rgba(128, 0, 128, 1)',   // Additional border color
    ];
    const randomColors = getRandomItems(backgroundColor, rownum);


    var ctx = document.getElementById('smallDoughnutChart').getContext('2d');
    var smallDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: category,
            datasets: [{
                label: '% of Money spent',
                data: combinedExpenses,
                backgroundColor: randomColors,
                borderColor: randomColors,
                borderWidth: 1
            }]
        },
        options: {
            cutout: '60%', // Adjust this value to control the size of the hole in the center
            plugins: {
                legend: {
                    position: 'bottom' // You can change the legend position as needed
                }
            }
        }
    });
}

// Function to fetch 5 random items from the array
function getRandomItems(array, numItems) {
    const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, numItems); // Get the first numItems elements
}
