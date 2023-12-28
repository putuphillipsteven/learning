// alert
alert("hello motherfucker");

// prompt
// prompt(title, [default])
let age = prompt("How old are you?", 100);
// return null if cancelled
alert(`You are ${age} years old`);

/*  
In IE, we must input the second parameter, because if
not, IE will insert the text "undefined"
*/

// confirm
let isBoss = confirm("Are you the boss?");
console.log(isBoss);
// true for ok, false for cancel.

let userName = prompt("Input youre name", "");
alert(userName);
