
function check(){
    let msg=document.querySelector("span")
    let VName=document.getElementById("nameInput").value;
    let VEmail=document.getElementById("emailInput").value;
    let EmailValidation=/^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;
    let VNumber=document.getElementById("numberInput").value;
    let NumberValidation=/^\d{11}$/;
    let VAddress=document.getElementById("AddressInput").value;
if (VName == "") {
    msg.innerHTML="Please Enter Your Name"
}else if(VEmail == ""){
    msg.innerHTML="Please Enter Your Email"
}else if (!EmailValidation.test(VEmail)) {
    msg.innerHTML = 'Please enter a valid email address';
    check.preventDefault();
}else if(VNumber == ""){
    msg.innerHTML="Please Enter Your Number"
}else if(!NumberValidation.test(VNumber)){
    msg.innerHTML="Please Enter a Valid Number"
}
else if(VAddress == ""){
    msg.innerHTML="Please Enter Your Address"
}
else{
    window.location.href = "./Home.html"
}
}

let Name = document.getElementById('nameInput');
let Email = document.getElementById('emailInput');
let feedback = document.getElementById('feedbackInput');
let number = document.getElementById('numberInput');
let Address = document.getElementById('AddressInput');


function Check() {
    let nameLabel = document.getElementById('nameLabel');
    let emailLabel = document.getElementById('emailLabel');
    let feedbackLabel = document.getElementById('feedbackLabel');
    let numberLabel = document.getElementById('numberLabel');
    let AddressLabel = document.getElementById('AddressLabel');

    if (Name.value.trim() !== '') {
        nameLabel.style.top = '-27px';
        nameLabel.style.color = 'black';
    } else {
        nameLabel.style.top = '12px';
        nameLabel.style.color = 'gray';
    }
    if (Email.value.trim() !== '') {
        emailLabel.style.top = '-27px';
        emailLabel.style.color = 'black';
    } else {
        emailLabel.style.top = '12px';
        emailLabel.style.color = 'gray';
    }
    if (feedback.value.trim() !== '') {
        feedbackLabel.style.top = '-27px';
        feedbackLabel.style.color = 'black';
    } else {
        feedbackLabel.style.top = '12px';
        feedbackLabel.style.color = 'gray';
    }
    if (number.value.trim() !== '') {
        numberLabel.style.top = '-27px';
        numberLabel.style.color = 'black';
    } else {
        numberLabel.style.top = '12px';
        numberLabel.style.color = 'gray';
    }
    if (Address.value.trim() !== '') {
        AddressLabel.style.top = '-27px';
        AddressLabel.style.color = 'black';
    } else {
        AddressLabel.style.top = '12px';
        AddressLabel.style.color = 'gray';
    }
}

Name.addEventListener('input', Check);
Email.addEventListener('input', Check);
feedback.addEventListener('input', Check);
Address.addEventListener('input', Check);
number.addEventListener('input', Check);
