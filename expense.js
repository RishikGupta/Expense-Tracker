// Function to add an expense entry
function addExpense() {
    //values from input fields
    var category = document.getElementById('category').value;
    var date = document.getElementById('expenseDate').value;
    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;
}

function saveExpense() {
    let ExpenseData = JSON.parse(localStorage.getItem("ExpenseData") || "[]");
    let userEmail = sessionStorage.getItem("fetchEmail");
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
    const expenseInfo = new Object();
    expenseInfo.email = userEmail;
    expenseInfo.category = category;
    expenseInfo.date = date;
    expenseInfo.amount = amount;
    expenseInfo.description = description;
    ExpenseData.push(expenseInfo);
    console.log(ExpenseData);
    localStorage.setItem("ExpenseData", JSON.stringify(ExpenseData));

   
    $("input#expenseDate,input#amount,input#description").val("");
     // Show notification
     alert("saved successfully!");
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
