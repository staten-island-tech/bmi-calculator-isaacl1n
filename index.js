console.log("connected");
var bmiCalc = prompt("")

function getBMI(h,w) {
    ;
}

function check(x)
    if(x >= 18.5 && x < 25) {
            console.log("normal"); 
        }
        else if(x < 18.5) {
            console.log("underweight"); 
        }
        else if(x >= 25 && x < 29.9) {
            console.log("overweight"); 
        }
        else if(x >= 30) {
            console.log("obese"); 
        }
        else {
            console.log("error");
        }

let x = getBMI(h,w);
    check(x)