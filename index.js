let currData = JSON.parse(localStorage.getItem("users"));
let currUser = JSON.parse(localStorage.getItem("currentUser"));

$(document).ready(() => {
    $('#click').on('click', showData);
    $('#change').on('click', changeData);
    $('#summary').on('click', showSummary);
})

const showData = () => {
    console.log(currData);
    $("#container").text(JSON.stringify(currData));

}

const changeData = () => {
    for (let i = 0; i < currData.length; i++) {
        if(currData[i].email == currUser.email){
            console.log(currData[i].password);  
        }
    }
    // localStorage.setItem("users", JSON.stringify(currData));
}

const showSummary = () => {
    window.location.assign("http://127.0.0.1:5500/summary.html");
}