// Retrieve calculation button and add function to retrieve input values and then, form validation
let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener('click', function () {

    // Get necessary input values
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let bodyType;
    if (document.getElementById('male').checked) {
        bodyType = 'male';
    } else if (document.getElementById('female').checked) {
        bodyType = 'female';
    }

    // Making sure to validate the form
    if (!age) {
        alert("Please add your age");
    } else if (!height) {
        alert("Please add your height");
    } else if (!weight) {
        alert("Please add your weight");
    } else if (!bodyType) {
        alert("Please select your body-type");
    }
    console.log({age, height, weight, bodyType})
});

function bmiCalculation() {

};

// function bmrCalculation();