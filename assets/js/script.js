// Retrieve calculation button and add function to retrieve input values and then, form validation
let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener('click', function () {

    // Get necessary input values
    let age = parseInt(document.getElementById("age").value);
    // Convert height value from m to cm
    let height = parseFloat(document.getElementById("height").value) / 100;
    let weight = parseFloat(document.getElementById("weight").value);

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

    // Call the BMI & BMR calculation function
    bmiCalculation(weight, height);
    bmrCalculation(weight, height, age, bodyType);
});

/**
 * Calculates value of BMI using values of height and weight.
 */
function bmiCalculation(weight, height) {
    let userBmi = weight / (height * height);
    let roundedUserBmi = Math.round(userBmi * 100) / 100; // Rounds upto two decimal places
    document.getElementById("bmi-value").textContent = `${roundedUserBmi}`

    let category;
    if (roundedUserBmi <= 18.5) {
        category = "Underweight"
    } else if (roundedUserBmi > 18.5 && roundedUserBmi <= 24.9) {
        category = "Normal weight"
    } else if (roundedUserBmi > 24.9 && roundedUserBmi <= 29.9) {
        category = "Overweight"
    } else {
        category = "Obesity"
    }
    document.getElementById("bmi-category").textContent = category;
}

/** 
 * Calculates value of BMR using weight, height, age and body type.
 */
function bmrCalculation(weight, height, age, bodyType) {
    let userBmr;
    if (bodyType === 'male') {
        userBmr = (10 * weight) + (6.25 * (height * 100)) - (5 * age) + 5 // converts height back to cm
    } else {
        userBmr = (10 * weight) + (6.25 * (height * 100)) - (5 * age) - 161 // converts height back to cm
    }
    document.getElementById("bmr-value").textContent = Math.round(userBmr) + " calories/day";
};
