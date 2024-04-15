const userData = JSON.parse(localStorage.getItem('users'));
const currUser = JSON.parse(localStorage.getItem('currentUser'));
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const userDisplay = null;
$(document).ready(() => {
  validateUser();
});

const validateUser = () => {
  console.log(userData);
  console.log(currUser);

  let user = null;
  for (let keyUser of userData) {
    if (currUser.email == keyUser.email ){
      user = keyUser;
    }
  }
  if (user == null) {
    alert("User does not exist");
  }else {
    displayMonthlyBar(user);
  }
  
}


const displayMonthlyBar = (user) => {
  const ctx = document.getElementById('bar_chart');
  const xaxis = months;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xaxis,
      datasets: [{
        label: 'Cash Flow',
        data: user.transactions,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
          y: {
            beginAtZero: true
          }
        },
      parsing: {
          xAxisKey: 'tMonth',
          yAxisKey: 'tAmount'
      }
    }
  });
}

