
let Name = document.getElementById('nameInput');
let Street = document.getElementById('StreetInput');
let Contact = document.getElementById('ContactInput');
let City = document.getElementById('CityInput');
let State = document.getElementById('StateInput');
let Zip = document.getElementById('ZipInput');

function Check() {
    let nameLabel = document.getElementById('nameLabel');
    let StreetLabel = document.getElementById('StreetLabel');
    let ContactLabel = document.getElementById('ContactLabel');
    let CityLabel = document.getElementById('CityLabel');
    let StateLabel = document.getElementById('StateLabel');
    let ZipLabel = document.getElementById('ZipLabel');

    if (Name.value.trim() !== '') {
        nameLabel.style.top = '-27px';
        nameLabel.style.color = 'black';
    } else {
        nameLabel.style.top = '12px';
        nameLabel.style.color = 'gray';
    }
    if (Street.value.trim() !== '') {
        StreetLabel.style.top = '-27px';
        StreetLabel.style.color = 'black';
    } else {
        StreetLabel.style.top = '12px';
        StreetLabel.style.color = 'gray';
    }
    if (Contact.value.trim() !== '') {
        ContactLabel.style.top = '-27px';
        ContactLabel.style.color = 'black';
    } else {
        ContactLabel.style.top = '12px';
        ContactLabel.style.color = 'gray';
    }
    if (City.value.trim() !== '') {
        CityLabel.style.top = '-27px';
        CityLabel.style.color = 'black';
    } else {
        CityLabel.style.top = '12px';
        CityLabel.style.color = 'gray';
    }
    if (State.value.trim() !== '') {
        StateLabel.style.top = '-27px';
        StateLabel.style.color = 'black';
    } else {
        StateLabel.style.top = '12px';
        StateLabel.style.color = 'gray';
    }
    if (Zip.value.trim() !== '') {
        ZipLabel.style.top = '-27px';
        ZipLabel.style.color = 'black';
    } else {
        ZipLabel.style.color = 'gray';
        ZipLabel.style.top = '12px';
    }
}

Name.addEventListener('input', Check);
Street.addEventListener('input', Check);
Contact.addEventListener('input', Check);
City.addEventListener('input', Check);
State.addEventListener('input', Check);
Zip.addEventListener('input', Check);


function check() {
    let msg = document.querySelector("span");
    let VPeople = document.getElementById("nameInput").value;
    let VDrinks = document.querySelectorAll('input[type="checkbox"]:checked');
    let VAddress = document.getElementById("StreetInput").value;
    let VCity = document.getElementById("CityInput").value;
    let VState = document.getElementById("StateInput").value;
    let VZip = document.getElementById("ZipInput").value;
    let VMethod = document.querySelector('input[name="Method"]:checked');
    let VContact = document.getElementById("ContactInput").value;
    let VNumberValidation=/^\d{11}$/;
    let VDate = document.getElementById("Date").value;
    let VTime = document.getElementById("Time").value;
    let Pop=document.querySelector(".click")

    if (VPeople < 100 || VPeople > 500) {
        msg.innerHTML = "Please enter the number of people (minimum 100 and maximum 500).";
    } else if (VDrinks.length< 4) {
        msg.innerHTML = "Please select at least 4 drinks.";
    } else if (!VMethod) {
        msg.innerHTML = "Please select a fulfillment method (pickup or delivery).";
    } else if (VAddress === "") {
        msg.innerHTML = "Please enter the street address.";
    } else if (!VNumberValidation.test(VContact)) {
        msg.innerHTML = "Please enter a valid number.";
    } else if (VCity === "") {
        msg.innerHTML = "Please enter the city.";
    } else if (VState === "") {
        msg.innerHTML = "Please enter the state/province.";
    } else if (VZip === "") {
        msg.innerHTML = "Please enter the zip code.";
    } else if (VDate === "") {
        msg.innerHTML = "Please select the event date.";
    } else if (VTime === "") {
        msg.innerHTML = "Please select the delivery or pick-up time.";
    } else {
        alert("Thanks For Your Order")
        window.location.href="home.html"
    }
}
