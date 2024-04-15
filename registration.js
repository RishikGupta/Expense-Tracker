let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

$( document ).ready(function() {
  $("#errEmail").hide();
  $("#errPassword").hide();
  $("#errAuth").hide();
	 let CustomerData = JSON.parse(localStorage.getItem("CustomerData") || "[]");

    $("#btnSignUp").on("click", function() {
        if(validateEmail($("#txtSigEmail").val())){
          const newCustomer = new Object();
          newCustomer.SigName = $("#txtSigName").val();
          newCustomer.SigEmail = $("#txtSigEmail").val();
          newCustomer.SigPassword = $("#txtSigPassword").val();
          newCustomer.SigConfirmPassword = $("#txtSigConfirmPassword").val();
          newCustomer.today = new Date().toISOString().slice(0, 10);
  
          CustomerData.push(newCustomer);
          // console.log(CustomerData);
          if(newCustomer.SigPassword==newCustomer.SigConfirmPassword){
            //  if the data of password and confirm password matches sent the data to the json Object.
            localStorage.setItem("CustomerData", JSON.stringify(CustomerData));
          }
          else{
              alert("Passwords do not match");
          }
  
          $("input#txtSigName,input#txtSigEmail,input#txtSigPassword,input#txtSigConfirmPassword").val("");
          alert("Signup successful");
          slider.classList.remove("moveslider");
	        formSection.classList.remove("form-section-move");
        }else{
          alert("Invalid email address");
        }
       
      });


      $("#btnLogin").on("click", function() {      
        let fetchedCustomerData = JSON.parse(localStorage.getItem("CustomerData") || "[]");
        let LoginEmail = $("#txtLoginEmail").val();
        let LoginPassword = $("#txtLoginPassword").val();
        let found =0;
        if(validateEmail($("#txtLoginEmail").val())){
        if(LoginEmail && LoginPassword =="")
        {
            found=2; //Username or password might be blank.
            $("#errAuth").show();
            $("#errAuth").text("Email id or password cannot be blank");
          }else{
            for (let i = 0; i < fetchedCustomerData.length;i++) {
              if(fetchedCustomerData[i].SigEmail==LoginEmail && fetchedCustomerData[i].SigPassword==LoginPassword){
                found=1;
                localStorage.setItem("fetchEmail", LoginEmail);
                localStorage.setItem("fetchUserName",fetchedCustomerData[i].SigName);
                window.location.href = "dashboard.html";
              }
            }
          }  

          if(found==0){
            $("#errAuth").show();
            $("#errAuth").text("User name of password is incorrect");
          }
        }else{
          alert("Invalid email address");
        }
      } );

      $(".ele").on("focus", function() {
          $("#errAuth").hide();
      } );

});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
