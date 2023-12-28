"use strict";

// let year = prompt(
//   "In which year was ECMASCRIPT-2015 specification published?",
//   ""
// );

// if (+year === 2015) {
//   alert("You are right!");
//   alert("Youre so smart");
// } else {
//   alert("fucking idiot");
// }

let year = 2015;
let cond = +year === 2015;
console.log(cond);

if (year < 2015) {
  console.log("Too early bitch");
} else if (year > 2015) {
  console.log("Too late");
} else {
  console.log("Smart");
}

let age = 20;
let accessAllowed = age > 18;

console.log(accessAllowed);

let age2 = 180;

let message =
  age2 < 3
    ? "Hi Baby!"
    : age2 < 18
    ? "Hello!"
    : age2 < 100
    ? "Greetings"
    : "Elder";

console.log(message);

let message2;
if (age2 < 3) {
  message2 = "Hello Baby";
} else if (age2 < 18) {
  message2 = "Hello Remaja";
} else if (age2 < 100) {
  message2 = "Hello Dewasa";
} else {
  message2 = "Elder";
}

console.log(message2);

// Task 1
if ("0") {
  console.log("Hello");
}

// Task 2
/* let answer = prompt(`What is the "official" name of Javascript?`, "");
answer = answer.toLowerCase();
if (answer === "ecmascript") {
  alert("Fucking Right!");
} else {
  alert(`You dont know shit? "ECMAScript!`);
}
 */
// Task 3

// let value = Number(prompt("Input youre lucky number", ""));

/* if (value > 0 && typeof value === "number") {
  alert(1);
} else if (value < 0 && typeof value === "number") {
  alert(-1);
} else {
  alert(0);
} */

let a = 10,
  b = -9;
let result = a + b < 4 ? "Below" : "Over";

console.log(result);

let login = "Employee";
let message3 =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No Login"
    : "";

console.log(message3);
