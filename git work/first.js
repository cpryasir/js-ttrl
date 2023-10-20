1*Assignment Operators:*
   - `=` (Assignment): Assigns the value of the right operand to the left operand.
   - `+=` (Addition assignment): Adds the right operand to the left operand and assigns the result to the left operand.
   - `-=` (Subtraction assignment): Subtracts the right operand from the left operand and assigns the result to the left operand.
   - `*=` (Multiplication assignment): Multiplies the left operand by the right operand and assigns the result to the left operand.
   - `/=` (Division assignment): Divides the left operand by the right operand and assigns the result to the left operand.
   - `%=` (Modulus assignment): Calculates the modulus of the left operand with the right operand and assigns the result to the left operand.



*/
/*
let x = 10;

x += 5;  // Equivalent to: x = x + 5
x -= 3;  // Equivalent to: x = x - 3
x *= 2;  // Equivalent to: x = x * 2
x /= 4;  // Equivalent to: x = x / 4
x %= 2;  // Equivalent to: x = x % 2
*/

/*Comparison Operators:

== (Equality): Checks if two operands are equal.
=== (Strict equality): Checks if two operands are equal and of the same type.
!= (Inequality): Checks if two operands are not equal.
!== (Strict inequality): Checks if two operands are not equal or not of the same type.
> (Greater than): Checks if the left operand is greater than the right operand.
< (Less than): Checks if the left operand is less than the right operand.
>= (Greater than or equal to): Checks if the left operand is greater than or equal to the right operand.
<= (Less than or equal to): Checks if the left operand is less than or equal to the right operand.*/
/*let num1 = 10;
let num2 = 5;

console.log(num1 == num2);  // false
console.log(num1 > num2);   // true
console.log(num1 <= num2);  // false
console.log(num1 !== num2);  // true*/

/*Logical Operators:

&& (Logical AND): Returns true if both operands are true.
|| (Logical OR): Returns true if at least one operand is true.
! (Logical NOT): Returns true if the operand is false and false if the operand is true.
xor ??

let a = 5;
let b = "5";

// Using logical XOR operator (!==)
console.log(a !== b);  // true (5 is not equal to "5" and they are of different types)


let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);  // false (Logical AND)
console.log(isTrue || isFalse);  // true (Logical OR)
console.log(!isFalse);           // true (Logical NOT)
*/
/*Bitwise operation */

/*let num3 = 1;  // Binary: 0101
let num4 = 1;  // Binary: 0011

console.log(num3 & num4);  // Bitwise AND: 0001 (1 in decimal)
console.log(num3 | num4);  // Bitwise OR: 0111 (7 in decimal)
console.log(num3 ^ num4);  // Bitwise XOR: 0110 (6 in decimal)
console.log(~num3);         // Bitwise NOT: -6
console.log(num3 << 1);     // Left shift by 1: 1010 (10 in decimal)
console.log(num3 >> 1);     // Right shift by 1: 0010 (2 in decimal)
*/
/*let num = 5;  // Binary: 00000000000000000000000000000

let bitwiseNotResult = ~num;

console.log(bitwiseNotResult);  

let num1 = 5;  // Binary: 00000000000000000000000000000101
let num2 = 3;  // Binary: 00000000000000000000000000000011

let result = num1 ^ num2;

console.log(result);  

coditional (ternary)operator :*/

/*let age =20;
let iage =(age >= 20)?"adult ": "minor";
console.log (iage);*/

/*unary operators; // type of operator

string operator?
+str2*/



 let value;

let result = (value = 5, value + 10);  // Evaluates both expressions and returns the second expression

console.log(result);  // 15