let a = 3;
let b = 12;
var sum = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 == 0){
    sum +=i;
  }
}

console.log ("Sum of even numbers from the interval [" + a + ", " + b + "] is " + sum);