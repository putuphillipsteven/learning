"use strict";
let x = 1;
x = -x;
console.log(x);
let y = 2;
console.log(x - y);

// Binnary --> 2 operand
// Unnary--> 1 operand

// Modulo
console.log(5 % 2);

// Exponentiation
console.log(2 ** 2);
console.log(4 ** 4);

console.log(4 ** (1 / 2));
console.log(8 ** (1 / 3));

// String concatenation
let s = "my" + "string";
console.log(s);
/* 
just the + operator that convert number to string,
others still convert to number
 */
console.log("1" + 2);
console.log(2 + 2 + "2");

// Numeric conversion using unary +
console.log(typeof +"1");

let apples = "2";
let oranges = "3";
console.log(+apples + +oranges);

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a);
console.log(c);

// Modify-in-place
let d = 10;
console.log((d *= 10));

// Increment/decrement
let counter = 1;
console.log(counter++);
console.log(--counter);

let counter2 = 1;
console.log(2 * ++counter);
console.log(2 * counter++);

// One line does multiple things is not good
// OAOA One line, one action

// Bitwise operators is use in things such as cryptography

let number2 = (1 + 2, 3 + 4);
console.log(number2);

for (a = 1, b = 3, c = a * b; a <= 5; a++) {
  console.log(a);
}

let number3 = 1;
let number4 = 1;

let number5 = ++number3;
let number6 = number4++;

console.log(number5);
console.log(number6);

let number7 = 2;
let number8 = 1 + (number7 *= 2);
console.log(number8);

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("   -9" + 5);
console.log(" -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log("   \t  \n" - 2);

let number9 = prompt("First Number?", 1);
let number10 = prompt("Second Number?", 1);

alert(+number9 + +number10);
