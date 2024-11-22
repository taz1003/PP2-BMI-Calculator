// Get necessary input values
let age = document.getElementById("age").value;
let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;

let bodyType;
if (document.getElementById("male").checked) {
    bodyType = 'male';
} else (document.getElementById("female").checked) {
    bodyType = "female";
}

// Making sure to validate the form
if (!age) {
    alert(`Please add your age`);
} else if (!height) {
    alert(`Please add your height`);
} else if (!weight) {
    alert(`Please add your weight`);
} else if (!bodyType) {
    alert(`Please select your body-type`);
}


function bmiCalculation();

function bmrCalculation();