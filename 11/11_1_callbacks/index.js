// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => {
//     callback(null, script);
//   };
//   script.onerror = () => {
//     callback(new Error(`Script load error for ${src}`));
//   };
//   document.head.append(script);
// }

// loadScript("test.js", (error, script) => {
//   if (error) {
//     alert(error);
//   } else {
//     alert(`Script ${script.src} loaded successfully`);
//   }
// });

const firstCallback = (callback) => {
  console.log("Printing One");
  callback();
};

firstCallback(() => {
  console.log("Printing Two");
});

const myDisplayer = (something) => {
  console.log("--PRINTING RESULT--", something);
};

const myCalculator = (num1, num2, myCallback) => {
  let sum = num1 + num2;
  console.log("--ADDING RESULT FIRST--");
  setTimeout(() => console.log("--TIMEOUT--"), 3000);
  myCallback(sum);
};

// myCalculator(5, 5, myDisplayer);

const myFunction = () => {
  let d = new Date();
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
};

setInterval(myFunction, 1000);
