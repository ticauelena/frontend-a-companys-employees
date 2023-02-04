const arrayNumber = [1, 2, 3, 4, 5, 6, 7,8 ,9, 10];

console.log("Print array values with for:")
for (let i = 0; i < arrayNumber.length; i++){
    console.log (arrayNumber[i])
}

console.log("Print array values with while:")
let i = 0;
while (i < arrayNumber.length){
    console.log(arrayNumber[i])
    i++;
} 

console.log("Print array values with for of: ")
for (let i of arrayNumber) {
    console.log(i)
}

console.log("Print array values with forEach:")
arrayNumber.forEach(i => console.log(i));


// Additional
console.log("Print color array values: ")
 function getColorIndex (){
    let color = document.getElementById('colorName').value;
    const colors = ['red', 'green', 'blue'];
    for (let i in colors){
        if (colors[i] == color) {
            document.getElementById("colorIndex").innerHTML = i;
            return;
        }
    }
    document.getElementById("colorIndex").innerHTML = -1; 
 }
 