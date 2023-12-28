let a;
let b = 12;

// console.log(a || b);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// if (1 || 0) console.log("truthy");

let hour = 20;

if (hour < 10 || hour > 18) {
  //   console.log("The office is closed");
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  //   console.log("Office is closed");
}

/* OR logical is returning the last userName if all
operand is falsy
 */

// console.log(1 || 0);

// console.log(null || 1);
// console.log(null || 0 || 1);

// console.log(undefined || null || 0);

let firstName = "";
let lastName = "";
let nickName = "";

// console.log(firstName || lastName || nickName || "Anonymous");

// console.log(true || "Not Printed");
// console.log(false || "Printed");

// AND OPERATOR
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

let hour2 = 12;
let minute2 = 30;

if (hour2 == 12 && minute2 == 30) {
  //   console.log(`The time is ${hour2}:${minute2}`);
}

if (1 && 0) {
  //   console.log("Wont worl bitch");
}

// console.log(1 && 0);
// console.log(1 && 5);

// console.log(null && 5);
// console.log(0 && "no matter what");

// console.log(1 && 2 && null && 3);
// console.log(1 && 2 && 3);

let x = 1;
let c = x > 0 && "Greater than zero!";
// console.log(c);
// if (x > 0) console.log("Greater than zero");

// console.log(!true);
// console.log(!0);

// console.log(!!"not empty string");
// console.log(!!null);

// console.log(Boolean("Non empty string"));
// console.log(Boolean(null));

// console.log(null || 2 || undefined);

// // // console.log(console.log("1") || 2 || console.log("3"));

// console.log(1 && null && 2);

// console.log(2 && 3);

// console.log(null || (2 && 3) || 4);

const checkAge = (age) => {
  if (age >= 14 && age <= 90) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkAge(15));
// console.log(checkAge(13));

const checkAge2 = (age) => {
  if (!(age >= 14) || age >= 90) {
    return true;
  } else {
    return false;
  }
};

const checkAge3 = (age) => {
  if (!(age >= 14 && age <= 90)) return true;
  return false;
};

const checkAge4 = (age) => {
  if (age < 14 || age > 90) return true;
  return false;
};

// console.log(checkAge2(91));
// console.log(checkAge3(91));
// console.log(checkAge4(91));

// if (0 || -1) console.log("first");
// if (-1 && 0) console.log("second");
// if (null || (-1 && 1)) console.log("third");

const checkAdmin = (userName) => {
  if (userName.toLowerCase() === "admin") {
    let password = prompt("Enter your password", "");
    if (password === "TheMaster") {
      alert("Welcome");
    } else if (password === null || password === "") {
      alert("Cancelled");
    } else {
      alert("Wrong password");
    }
  } else if (userName === null || userName === "") {
    alert("Cancelled");
  } else {
    alert("I dont know you");
  }
};

const doSomething = () => {
  let userName = prompt("Login", "");
  console.log(userName);
  checkAdmin(userName);
};
