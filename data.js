const userData = [
    {
     username: "Rishik",
     email: "rishik123@gmail.com",
     password: "hello123",
     userType: "student",
     income: 100,
     expense: 50,
     balance: 50,
     creationDate: "11\/04\/2024",
     transactions : [
        {
            tNumber: 1,
            tType: "income",
            tCategory: "gift",
            tDate: "11\/04\/2024",
            tAmount: 100,
            tDescription: "April Salary"
        },
        {
            tNumber: 2,
            tType: "expense",
            tCategory: "outing",
            tDate: "11\/04\/2024",
            tAmount: 50,
            tDescription: "Food & Drinks"
        }
     ]
    },
    {
        username: "Dikunj",
        email: "dikunj123@gmail.com",
        password: "hello456",
        userType: "professional",
        income: 1000,
        expense: 500,
        balance: 500,
        creationDate: "2024\/04\/01",
        transactions : [
           {
               tNumber: 1,
               tType: "income",
               tCategory: "salary",
               tDate: "2024\/04\/01",
               tAmount: 1000,
               tDescription: "April Salary"
           },
           {
            tNumber: 2,
            tType: "expense",
            tCategory: "transfer",
            tDate: "2024\/04\/01",
            tAmount: 500,
            tDescription: "Transfer for loan Payment"
        }
        ]
       }
   ];

   for (let obj of userData){
    console.log(obj);
   }