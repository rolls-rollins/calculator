//alert("javascript loaded");

const calculator = (num1,num2) =>{
let sum = num1+num2;
let diff = num1-num2;
let product = num1*num2;
let quotient = num1/num2;

let output = document.getElementById("output")
output.innerHTML = "Sum: "+sum +"\n"+
"Difference: " +diff+"\n"+
"Product: " +product+"\n"+
"Quotient: " +quotient;
};

//calcultor(500, 233);



const calc = document.getElementById("calculate");
calc.addEventListener("click" ,(e) => {
   let num1 = document.getElementById("num1").value;
   let num2 = document.getElementById("num2").value;
   num1 = parseInt(num1);
   num2 = parseInt(num2);
   calculator(num1, num2);
});