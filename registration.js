let userData = new Object();
var users = [
    {
      "username": "Rishik",
      "email": "rishik123@gmail.com",
      "password": "hello123",
      "userType": "student",
      "income": 100,
      "expense": 50,
      "balance": 50,
      "creationDate": "11/04/2024",
      "transactions": [
        {
          "tNumber": 1,
          "tType": "income",
          "tCategory": "gift",
          "tDay": 22,
          "tMonth": "September",
          "tYear": 2024,
          "tAmount": 100,
          "tDescription": "September Salary"
        },
        {
          "tNumber": 2,
          "tType": "expense",
          "tCategory": "outing",
          "tDay": 22,
          "tMonth": "September",
          "tYear": 2024,
          "tAmount": 50,
          "tDescription": "Food & Drinks"
        }
      ]
    },
    {
      "username": "Dikunj",
      "email": "dikunj123@gmail.com",
      "password": "hello456",
      "userType": "professional",
      "income": 1000,
      "expense": 500,
      "balance": 500,
      "creationDate": "2024/04/01",
      "transactions": [
        {
          "tNumber": 1,
          "tType": "income",
          "tCategory": "salary",
          "tDay": 22,
          "tMonth": "October",
          "tYear": 2024,
          "tAmount": 1000,
          "tDescription": "October Salary"
        },
        {
          "tNumber": 2,
          "tType": "expense",
          "tCategory": "transfer",
          "tDay": 22,
          "tMonth": "November",
          "tYear": 2024,
          "tAmount": 500,
          "tDescription": "Transfer for loan Payment"
        }
      ]
    }
  ]
$(document).ready(() => {
    localStorage.setItem("users", JSON.stringify(users));
    $("#submit").on("click", passData);
});

const passData = () => {
    // userData.name = $("#name").val();
    // userData.email = $("#email").val();
    // userData.password = $("#password").val();
    // const ele = JSON.parse(localStorage.getItem("users"));
    // ele.push(userData);
    //localStorage.setItem("users", JSON.stringify(ele));
    userData.name = "Rishik";
    userData.email = "rishik123@gmail.com";
    userData.password = "hello123";
    localStorage.setItem("currentUser", JSON.stringify(userData));
}