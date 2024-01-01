function sayHi() {
  console.log("hello");
}

let func = sayHi;

// func()
// sayHi()

let sayHi2 = function () {
  console.log("hello");
};

let func2 = sayHi2;

// sayHi2();
// func2();

function ask(question, yes, no) {
  if (question) return yes();
  return no();
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}

ask(false, showOk, showCancel);

function ask2(question, yesCallback, noCallBack) {
  if (question) return yesCallback();
  else return noCallBack();
}

ask2(
  false,
  function () {
    console.log("You agreed");
  },
  function () {
    console.log("You canceled the execution.");
  }
);

sayHi3("John");

function sayHi3(name) {
  console.log(`Hello, ${name}`);
}

let age = 10;

let welcome;

if (age > 18) {
  welcome = function () {
    console.log("Hello, old");
  };
} else {
  welcome = function () {
    console.log("Hello, child");
  };
}

welcome();

let welcome2 =
  age > 18
    ? function () {
        console.log("Hello, old");
      }
    : function () {
        console.log("Hello, child");
      };

welcome2();
