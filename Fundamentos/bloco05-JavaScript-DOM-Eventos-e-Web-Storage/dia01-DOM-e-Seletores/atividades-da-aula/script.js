document.getElementById("header-container").style.background = "rgb(10, 130, 90)";

document.getElementById("footer-container").style.background = "rgb(3, 60, 50)";

let emergency = document.querySelectorAll(".emergency-tasks div");
let noEmergency = document.querySelectorAll(".no-emergency-tasks div");

for(let i of emergency){
    i.style.background = "#ffb6c1";
}

for(let i of noEmergency){
    i.style.background = "#FFEB7A";
}

let emergencyTitle = document.querySelectorAll(".emergency-tasks h3");
let noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks h3");

for(let i of emergencyTitle){
    i.style.background = "#5A005A";
}

for(let i of noEmergencyTitle){
    i.style.background = "#414040";
}
