let a = 5;
let b = 11;
let c = 9;

// simple method
if(a > b){
    if (a > c) {
        console.log("Biggest number: " + a)
    }
    else {
        console.log("Biggest number: " + c) 
    }
}
else if (b > c) { 
    console.log("Biggest number: " + b) 
}
else {
    console.log("Biggest number: " + c) 
}


if(a < b){
    if (a < c) {
        console.log("Smallest number: " + a)
    }
    else {
        console.log("Smallest number: " + c) 
    }
}
else if (b < c) { 
    console.log("Smallest number: " + b) 
}
else {
    console.log("Smallest number: " + c) 
}

// Advanced method
function biggestNumber(x, y, z) {
    console.log ( x > y ? 
        x > z ? 'Advanced: Biggest number: ' + x 
        : 'Advanced: Biggest number: ' + z 
        : y > z ? 'Advanced: Biggest number: ' + y
        : 'Advanced: Biggest number: ' +z);
  } 

function smallerNumber(x, y, z) {
    console.log ( x < y ? 
        x < z ? 'Advanced: Smallest number: ' + x 
        : 'Advanced: Smallest number: ' + z 
        : y < z ? 'Advanced: Smallest number: ' + y
        : 'Advanced: Smallest number: ' +z)
  } 
  
biggestNumber(a, b, c)
smallerNumber(a, b, c)
