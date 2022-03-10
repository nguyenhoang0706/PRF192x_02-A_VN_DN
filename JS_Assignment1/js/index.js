function notify() {
    alert("Chào mừng bạn đến với ứng dụng JavaScript đầu tiên");
    document.getElementById("btnNext").style.display = "block";
    document.getElementById("button__try").style.display = "none";
}
// function hien thi
function next() {
    inputName();
    inputCity();
    inputtel();
    inputYearAge();
    inputEmail();
}
// function nhap ten
function inputName() {
    do{
        var ten = prompt("Hãy nhập tên của bạn");
    }while(isFinite(ten));
        document.getElementById("name").innerHTML="Tên: " + ten;
    
}
// function nhap thanh pho
function inputCity() {
    do{
        var tp = prompt("Hãy nhập thành phố bạn đang sống");
    }while(isFinite(tp));
    document.getElementById("city").innerHTML="Thành phố: " + tp;
    
}
// funtion nhap so dien thoai
function inputtel() {
    // do{
    //     var tel = parseInt(prompt("Hãy nhập số điện thoại của bạn"));
    // }while(isNaN(tel));
    // document.getElementById("mobile").innerHTML="Số điện thoại: " + tel;
    var tel = prompt("Hãy nhập số điện thoại của bạn");
    var tg = validateTel(tel);
    while(tg==false){
        tel = prompt("Hãy nhập lại số điện thoại của bạn");
        tg = validateTel(tel);
    }
    document.getElementById("mobile").innerHTML="Số điện thoại: " + tel;

}
    // funtion validate nhap so dien thoai
function validateTel(tel){
    var telFormat = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if(tel.match(telFormat)){
        return true;
    }
    else{
        return false;
    }
}
// function nhap nam sinh
function inputYearAge() {
    var date = new Date();
    var tuoi;
    
    tuoi = prompt("Hãy nhập năm sinh");
    while(tuoi> date.getFullYear()){
        tuoi = prompt("Hãy nhập lại năm sinh");
    }
        
    
    document.getElementById("age").innerHTML="Tuổi: " + (date.getFullYear()-tuoi);
}
// function nhap email
function inputEmail(){
    var email = prompt("Hãy nhập email");
    var flag = validateEmail(email);
    while(flag==false){
        email = prompt("Hãy nhập lại email");
        flag = validateEmail(email);
    }
    document.getElementById("email").innerHTML="Email: " + email;
}
    // function validate nhap email
function validateEmail(email){
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(mailformat))
    {
        return true;
    }
    else
    {
        return false;
    }
}