
function check(){
    let msg=document.getElementById("Span")
    let VName=document.getElementById("nameInput").value;
    let VEmail=document.getElementById("emailInput").value;
    let VFeed=document.getElementById("feedbackInput").value;
    let EmailValidation=/^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;
if (VName == "" ) {
    msg.innerHTML="Please Enter Your Name"
}else if(VEmail == ""){
    msg.innerHTML="Please Enter Your Email"
}else if (!EmailValidation.test(VEmail)) {
    msg.innerHTML = 'Please enter a valid email address';
}else if(VFeed == ""){
    msg.innerHTML="Please Write Any Message"
}else{
    window.location.href = "./Home.html"
}
}


let Name = document.getElementById('nameInput');
let Email = document.getElementById('emailInput');
let feedback = document.getElementById('feedbackInput');


function Check() {
    let nameLabel = document.getElementById('nameLabel');
    let emailLabel = document.getElementById('emailLabel');
    let feedbackLabel = document.getElementById('feedbackLabel');
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
}

Name.addEventListener('input', Check);
Email.addEventListener('input', Check);
feedback.addEventListener('input', Check);
