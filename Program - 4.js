// Create a program that demonstrates the difference between let and const in JavaScript. Declare a variable using let and assign a string to it, then reassign it to another value. Do the same with a variable declared using const. Explain the behavior  of both variables.


let first = "yasir";    // let is  Reassignable but no redeclarable
first = "YASIR"; 
console.log(first);

const second = "akhtar";
second = "AKHTAR";   // const is no Reassignable and no redeclrable