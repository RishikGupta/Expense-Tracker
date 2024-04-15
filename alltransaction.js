document.addEventListener("DOMContentLoaded", function() {
    // Retrieve current user's data from localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const transactions = currentUser ? currentUser.transactions : [];

    // Function to generate table row for a transaction
    function generateTransactionRow(transaction, index) {
        const tableBody = document.getElementById("transaction-body");
        const row = document.createElement("tr");

        // Populate row with transaction data
        row.innerHTML = `
            <td>${transaction.tNumber}</td>
            <td>${transaction.tType}</td>
            <td>${transaction.tCategory}</td>
            <td>${transaction.tDay}/${transaction.tMonth}/${transaction.tYear}</td>
            <td>${transaction.tAmount}</td>
            <td>${transaction.tDescription}</td>
            <td><button class="delete-btn" data-index="${index}">Delete</button></td>
        `;
        
        // Attach delete button click event listener
        row.querySelector(".delete-btn").addEventListener("click", function() {
            // Remove transaction from array
            transactions.splice(index, 1);
            // Regenerate table rows
            generateTransactionRows();
            // Update chart
            updateChart();
        });

        // Append row to table body
        tableBody.appendChild(row);
    }

    // Function to generate table rows for transactions
    function generateTransactionRows() {
        const tableBody = document.getElementById("transaction-body");
        tableBody.innerHTML = ''; // Clear existing rows

        transactions.forEach((transaction, index) => {
            generateTransactionRow(transaction, index);
        });
    }

    // Initial generation of table rows
    generateTransactionRows();

    // Function to update the chart
    function updateChart() {
        const income = transactions.filter(transaction => transaction.tType === "income")
                                   .reduce((total, transaction) => total + transaction.tAmount, 0);
        const expenses = transactions.filter(transaction => transaction.tType === "expense")
                                     .reduce((total, transaction) => total + transaction.tAmount, 0);
        const chartData = {
            labels: ["Income", "Expenses"],
            datasets: [{
                label: "Income vs Expenses",
                data: [income, expenses],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        };

        const chartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        const ctx = document.getElementById('income-expenses-chart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });
    }

    // Initial update of the chart
    updateChart();
});