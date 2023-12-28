"use strict";
// "dinamically type"

let message = "hello";
message = 123;

// number
let number = 1;
// Infinity
console.log(1 / 0);
console.log(Infinity);

// Nan
console.log(1 / "anjay");

// BigInt
/* 
Max numbers to be safe in numbers is 9007199254740991
*/
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

// Big int created by appending n to the end of an integer.
const int = 1234567890123456789012345678901234567890;
const bigInt = 1234567890123456789012345678901234567890n;
console.log(int);
console.log(bigInt);

// Big Int not supported in IE.

// String
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embrase another ${str}`;

// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 < 1;
console.log(isGreater);

// null value
let age2 = null;
console.log(age2);

let age3 = 199;
console.log(age3);

age3 = undefined;
console.log(age3);

// object --> non primitive data types
let user2 = {
  name: "putu",
  age: 24,
};
console.log(typeof str);
console.log(typeof number);
console.log(typeof isGreater);
console.log(typeof age2);
console.log(typeof age3);
console.log(typeof bigInt);

// typeof is an operator, not a function

// task1
let task1Name = "Ilya";
console.log(`hello ${1}`);
console.log(`hello ${"task1Name"}`);
console.log(`hello ${task1Name}`);
