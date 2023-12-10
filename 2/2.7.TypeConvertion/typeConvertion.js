"use strict";

// String conversions
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

// Number conversions
let number = "1",
  number2 = "2",
  output = number / number2;

console.log(typeof output);

// Explicit conversion
let str = "123";
let num = Number(str);

// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));

console.log(typeof num);
console.log(Number("        1"));
console.log(Number("1 a"));
console.log(Number(true));
console.log(Number(false));
