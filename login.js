const loginBtn = document.getElementById("loginbtn");
loginBtn.onclick = function(){
    const phoneNumber = document.getElementById("phone").value;
    const password = document.getElementById("pass").value;
    if(phoneNumber != "" && password != ""){
        open("dashboard.html")
    }
    else {
        confirm("Oops! There is an empty field!");
    }
}