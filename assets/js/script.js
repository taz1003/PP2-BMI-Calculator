// Activate calculation button after waiting for DOM to finish loading
// Code on line 3 was taken from the CI-Love Maths project
document.addEventListener("DOMContentLoaded", function () {
    let calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener('click', function () {
        mainBmiBmr();
    });

    // Activate calculation using "Enter" on keyboard
    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            mainBmiBmr();
        }
    });
});

/**
 * Get necessary input values, shows errors for invalid
 * inputs and calculates bmi & bmr values
 */
function mainBmiBmr() {
    let age = parseInt(document.getElementById("age").value);
    let height = parseFloat(document.getElementById("height").value) / 100; // Convert from cm to m
    let weight = parseFloat(document.getElementById("weight").value);

    let bodyType;
    if (document.getElementById('male').checked) {
        bodyType = 'male';
    } else if (document.getElementById('female').checked) {
        bodyType = 'female';
    }

    clearError(); // Clears error messages

    // Validates the form
    if (!age) {
        errorMessage("error-age", "Please enter your age");
        return; // Stops further process
    } else if (age < 2 || age > 110) {
        errorMessage("error-age", "Please enter a valid age");
        return;
    } else if (!bodyType) {
        errorMessage("error-bodytype", "Please select your body type");
        return;
    } else if (!height) {
        errorMessage("error-height", "Please enter your height");
        return;
    } else if (height <= 0 || height > 250) {
        errorMessage("error-height", "Please enter a valid height");
        return;
    } else if (!weight) {
        errorMessage("error-weight", "Please enter your weight");
        return;
    } else if (weight <= 0 || weight > 900) {
        errorMessage("error-weight", "Please enter a valid weight");
        return;
    }

    // Call the BMI & BMR calculation function
    bmiCalculation(weight, height);
    bmrCalculation(weight, height, age, bodyType);
}

/** 
 * Shows error message for invalid form input.
 */
function errorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

/** 
 * Removes error messages.
 */
function clearError() {
    // Create an array of error-ids
    const errorIds = ["error-age", "error-height", "error-weight", "error-bodytype"];

    // Clears errors for the error-ids
    for (const errorId of errorIds) {
        document.getElementById(errorId).textContent = ``;
    }
}

/**
 * Calculates value of BMI using values of height and weight.
 */
function bmiCalculation(weight, height) {
    let bmiUnit = `kg/m\u00B2`; // Shows kg/m^2 as the bmi unit
    let userBmi = weight / (height * height);
    let roundedUserBmi = Math.round(userBmi * 100) / 100; // Rounds upto two decimal places
    document.getElementById("bmi-value").textContent = `${roundedUserBmi} ${bmiUnit}`;

    let bmiCategory = document.getElementById("bmi-category");

    let category;
    if (roundedUserBmi <= 18.5) {
        category = "Underweight";
        categoryClass = 'underweight';
    } else if (roundedUserBmi > 18.5 && roundedUserBmi <= 24.9) {
        category = "Normal weight";
        categoryClass = 'normal-weight';
    } else if (roundedUserBmi > 24.9 && roundedUserBmi <= 29.9) {
        category = "Overweight";
        categoryClass = 'overweight';
    } else {
        category = "Obesity";
        categoryClass = 'obesity';
    }

    bmiCategory.textContent = category;
    bmiCategory.className = categoryClass; // applies the classes
}

/** 
 * Calculates value of BMR using weight, height, age and body type.
 */
function bmrCalculation(weight, height, age, bodyType) {
    let userBmr;
    if (bodyType === 'male') {
        userBmr = (10 * weight) + (6.25 * (height * 100)) - (5 * age) + 5; // converts height back to cm
    } else {
        userBmr = (10 * weight) + (6.25 * (height * 100)) - (5 * age) - 161; // converts height back to cm
    }
    document.getElementById("bmr-value").textContent = Math.round(userBmr) + " calories/day";
}

/**
 * Resets the form.
 */
function resetButton() {
    clearError();
    const resetIds = ["age", "height", "weight"];
    for (const resetId of resetIds) {
        document.getElementById(resetId).value = ``;
    }
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("bmi-value").textContent = `0`;
    document.getElementById("bmr-value").textContent = `0`;
    document.getElementById("bmi-category").textContent = ``;
}