let a = 2;

switch (a) {
  case 1:
    console.log("Too Small");
    break;
  case 2:
    console.log("Pas!");
    break;
  case 3:
    console.log("Kebesaran cuk");
    break;
  default:
    console.log("Suka suka kau");
}

a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    console.log("This runs, because +a is 1, equals b + 1");
    break;
  default:
    console.log("This doesnt run");
}

a = 3;

switch (a) {
  case 4:
    console.log("Right!");
    break;
  case 3:
  case 5:
    console.log("Wrong!");
    console.log("Why dont you fuck");
    break;
  default:
    console.log("Really, this is strange");
}
// let arg = prompt("Enter a value", "");

// switch (arg) {
//   case "0":
//   case "1":
//     alert("String value");
//     break;
//   case 3:
//     alert("Never executes");
//     break;
//   default:
//     alert("Unknown value");
// }

let browser = "Safari";

if (browser === "Edge") {
  console.log("Youve got the edge");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we must support these browsers too");
} else {
  console.log("We hope this page looks ok!");
}

a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2, 3");
}
