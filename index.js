console.log("connected");

let displayName = prompt("Please enter your name")
    console.log("Name: " + displayName)
var m = prompt("Enter your weight in kilograms");
var h = prompt("Enter your height in centimeters");

function getBMI(h,m) {
    return (m / ((h / 100) * (h / 100)));
}
function check(x) {
    console.log("BMI: " + x)
    if(x >= 18.5 && x < 25) {
            console.log("normal")
            alert("Name: " + displayName + "\nYour body mass index is " + x + "." + "\nYou are of normal weight."); 
        }
        else if(x < 18.5) {
            console.log("underweight")
            alert("Name: " + displayName + "\nYour body mass index is " + x + "." + "\nYou are underweight."); 
        }
        else if(x >= 25 && x < 29.9) {
            console.log("overweight")
            alert("Name: " + displayName + "\nYour body mass index is " + x + "." + "\nYou are overweight."); 
        }
        else if(x >= 30) {
            console.log("obese")
            alert("Name: " + displayName + "\nYour body mass index is " + x + "." + "\nYou are obese."); 
        }
        else {
            console.log("error")
            alert("Name: " + displayName + "You've encountered an error. Please make sure your inputs are valid.");
        }
    }

let x = getBMI(h,m);
    check(x);