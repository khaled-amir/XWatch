const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
btn1.onclick = function(){
    var phoneNumber = document.getElementById("phone").value;
    var password = document.getElementById("pass").value;
    if(phoneNumber != "" && password != ""){
        step1.style.display = "none";
        step2.style.display = "block";
        btn2.onclick = function(){
            var cardNum = document.getElementById("cardNumber").value;
            var expM = document.getElementById("expM").value;
            var expY = document.getElementById("expY").value;
            var cvc = document.getElementById("cvc").value;
            if(cardNum != "" && expM != "" && expY != "" && cvc != "" ){
                step2.style.display = "none";
                step3.style.display = "block";
                btn3.onclick = function(){
                    open("dashboard.html", "_self");
                }
            }
            else {
                confirm("Please Review the data you filled in the form!")
            }
        }
    }
    else {
        confirm("Oops! There is an empty field");
    }
}