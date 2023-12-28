// Function declaration

function showMessage() {
  console.log("Hello Everyone!");
}

showMessage();

function showMessage2(param1, param2) {
  console.log(`${param1}, ${param2}`);
}

showMessage2(10, 20);

function showMessage3() {
  let message = "Hello I'am Javascript";
  console.log(message);
}

showMessage3();

let userName = "John";

function showMessage4() {
  let message = "Hello " + userName;
  console.log(message);
}

showMessage4();

function showMessage5() {
  userName = "Bob Sadino";
  let message = "Hello " + userName;
  console.log(message);
}

console.log(userName);

showMessage5();

console.log(userName);

userName = "John";

function showMessage6() {
  let userName = "Bob";
  let message = "Hello " + userName;
  console.log(message);
}

showMessage6();

function showMessage7(from, text) {
  return from + ": " + text;
}

console.log(showMessage7("Nama", "I Putu Phillip Steven"));

function showMessage8(from, text) {
  from = "*" + from + "*";
  return from + ": " + text;
}

let from = "Ann";
console.log(showMessage8(from, "Hello"));

function showMessage9(from, text = "no text given") {
  return from + ": " + text;
}

console.log(showMessage9("Ann"));

function showMessage10(from, text) {
  if (text === undefined) {
    text = "no text given";
  }
  return from + ": " + text;
}

console.log(showMessage10("Ann"));

function showMessage11(from, text) {
  text = text || "no text given";
  return from + ": " + text;
}

console.log(showMessage11("Ann"));

function showMessage12(text) {
  return text === undefined ? "Empty message" : text;
}

console.log(showMessage12());

function showMessage13(text) {
  return text ? text : "Empty";
}

console.log(showMessage13(""));

function showCount(count) {
  return count ?? "unknown";
}

console.log(showCount());
console.log(showCount(null));
console.log(showCount(0));

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let ageNumber = 10;

function doChecking(age) {
  if (checkAge(age)) {
    console.log("access granted");
    return true;
  } else {
    console.log("access denied");
    return false;
  }
}

function showMovie(age) {
  if (!doChecking(age)) {
    return true;
  }
  console.log("SHOWING YOU THE MOVIE!");
}

console.log(showMovie(18) === undefined);

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isPrime(5));
console.log(showPrimes(10));

// Rewrite the function using "?" or "||"
// function checkAgeFinal(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

function checkAgeFinal(age) {
  return age > 18 ? true : console.log("Did parents allow you?");
}

console.log(checkAgeFinal(19));

// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
function minWithIfElse(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(10, -1));
console.log(minWithIfElse(10, -1));
