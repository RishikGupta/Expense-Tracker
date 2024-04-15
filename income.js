function saveIncome() {
    let IncomeData = JSON.parse(localStorage.getItem("IncomeData") || "[]");
    let userEmail = localStorage.getItem("fetchEmail");
     // Get values from form fields
    var category = document.getElementById('category').value;
    var date = document.getElementById('expenseDate').value;
    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;


    // Validate input data
    if (category.trim() === '' || date.trim() === '' || amount.trim() === '' || isNaN(amount)) {
        alert('Please enter valid data');
        return;
        }


    // Create an object to store expense information
    const incomeInfo = new Object();
    incomeInfo.email = userEmail;
    incomeInfo.category = category;
    incomeInfo.date = date;
    incomeInfo.amount = amount;
    incomeInfo.description = description;
    IncomeData.push(incomeInfo);
    localStorage.setItem("IncomeData", JSON.stringify(IncomeData));
console.log(JSON.stringify(IncomeData));

$("input#amount,input#description").val("");

     // Show notification
     alert("Saved successfully!");
    }

    // Function to show notification
    function showNotification(message) {
        var notification = document.getElementById("notification");
        notification.textContent = message;
        notification.style.display = "block";
        setTimeout(function() {
            notification.style.display = "none";
        }, 3000); // Hide the notification after 3 seconds
}

// Add click event to the cancel icon
document.getElementById('cancelButton').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'button.html'; 
});
