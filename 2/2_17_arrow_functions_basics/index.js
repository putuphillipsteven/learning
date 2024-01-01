let sum = (a, b) => a + b;

let double = (n) => n * 2;

let sayHi = () => {
  console.log("Hello");
};

console.log(sum(10, 20));
console.log(double(10));
sayHi();

let age = 10;

let welcome = age > 18 ? () => "Hello, old" : () => "Hello, young";

console.log(welcome());

let sum2 = (a, b) => {
  let result = a + b;
  return result;
};

console.log(sum2(10, 20));

let ask = (question, yesCallback, noCallback) => {
  if (question) return yesCallback();
  else return noCallback();
};

ask(
  true,
  () => {
    console.log("You agreed");
  },
  () => console.log("You cancelled the execution")
);
