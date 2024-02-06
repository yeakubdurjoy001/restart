var weight = 46; // in kilograms
var height = 1.57; // in meters

var bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("Your BMI is: " + bmi.toFixed(2));
  console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Your BMI is: " + bmi.toFixed(2));
  console.log("You are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Your BMI is: " + bmi.toFixed(2));
  console.log("You are overweight.");
} else {
  console.log("Your BMI is: " + bmi.toFixed(2));
  console.log("You are obese.");
}
