# BMI Calculator

[view the full project here](https://taz1003.github.io/PP2-BMI-Calculator/)

The BMI Calculator is an interactive and responsive webpage that enables users to calculate their Body Mass Index (BMI) and Basal Metabolic Rate (BMR). It provides valuable insights into body composition and metabolism, helping users make informed decisions about their health and fitness goals.

This site aims to showcase how pure JavaScript operates in a real-world context. It is targeted toward individuals who are interested in implementing more advanced JavaScript concepts in relation to HTML and CSS and also have a passion for fitness. The BMI Calculator is a fully responsive, JavaScript-based website allowing users to assess their fitness levels and understand the daily calorie intake required to maintain weight.

![Responsive Mockup](assets/images/screenshots/bmi_calculator_mockup.png)














All in js -
error 1 : had to add (id = "calculate-button") to make sure the eventListener for the calculate button worked. Wasnt working with just class name. (lines 2-3)
Wasnt able to get BMI value, was getting NaN. Fixed it after some research online. Learned to add arguments to pass them into broader scope. (line 41)
During the form validation, the code was continuing even after the first alert message. Added "return" to ensure the discontinuation. (lines 19-31)
Code on lines 68 - 72 was created after a good amount research on youtube.
The for..of loop in lines 79 - 84 was created after similar research on google and youtube.