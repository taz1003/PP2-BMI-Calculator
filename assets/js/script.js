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

    clearError(); // Clears any error message

    // Makes sure to validate the form
    let isValid = true
    if (!age) {
        isValid = false
        errorMessage("error-age", "Please add your age");
        return;
    } else if (!height) {
        isValid = false
        errorMessage("error-height", "Please add your height");
        return;
    } else if (!weight) {
        isValid = false
        errorMessage("error-weight", "Please add your weight");
        return;
    } else if (!bodyType) {
        isValid = false
        errorMessage("error-bodytype", "Please add your body type");
        return;
    }

    // Call the BMI & BMR calculation function
    if (isValid) {
        bmiCalculation(weight, height);
        bmrCalculation(weight, height, age, bodyType);
    }
});

/** 
 * Shows error message for invalid form input.
 */
function errorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

/** 
 * Removes error messages
 */
function clearError() {
    document.getElementById("error-age").textContent = ``;
    document.getElementById("error-height").textContent = ``;
    document.getElementById("error-weight").textContent = ``;
    document.getElementById("error-bodytype").textContent = ``;
}

/**
 * Calculates value of BMI using values of height and weight.
 */
function bmiCalculation(weight, height) {
    let bmiUnit = `kg/m\u00B2`; // Shows kg/m^2 as the bmi unit
    let userBmi = weight / (height * height);
    let roundedUserBmi = Math.round(userBmi * 100) / 100; // Rounds upto two decimal places
    document.getElementById("bmi-value").textContent = `${roundedUserBmi} ${bmiUnit}`;

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

/**
 * Resets the form.
 */
function resetButton() {
    document.getElementById("age").value = ``;
    document.getElementById("height").value = ``;
    document.getElementById("weight").value = ``;
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("bmi-value").textContent = `0`;
    document.getElementById("bmi-category").textContent = ``;
    document.getElementById("bmr-value").textContent = `0`;
}