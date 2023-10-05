console.log("connected");

var m = prompt("Enter your weight in kilograms");
var h = prompt("Enter your height in centimeters")

function getBMI(h,m) {
    return (m / ((h / 100)^2));
}
function check(x) {
    if(x >= 18.5 && x < 25) {
            console.log("normal")
            alert("Your body mass index is " + x + "." + "\nYou are of normal weight."); 
        }
        else if(x < 18.5) {
            console.log("underweight")
            alert("Your body mass index is " + x + "." + "\nYou are underweight."); 
        }
        else if(x >= 25 && x < 29.9) {
            console.log("overweight")
            alert("Your body mass index is " + x + "." + "\nYou are overweight."); 
        }
        else if(x >= 30) {
            console.log("obese")
            alert("Your body mass index is " + x + "." + "\nYou are obese."); 
        }
        else {
            console.log("error")
            alert("You've encountered an error. Please try again.");
        }
    }

let x = getBMI(h,m);
    check(x);