// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done"), 2000);
//   setTimeout(() => reject("Whoops"), 2000);
// })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finish"));

const { error } = require("console");

// const loadscript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => {
//       resolve(script);
//     };
//     script.onerror = () => {
//       reject(new Error(`Script load error for ${src}`));
//     };
//     document.head.append(script);
//   });
// };

// let promise = loadscript("test.js")
//   .then(
//     (script) => alert(`${script.src} is loaded !`),
//     (error) => alert(`Error: ${error.message}`)
//   )
//   .then((script) => alert(`Another handler...`));

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

// delay(3000).then(() => console.log(`Run after 3 seconds`));

const doSomethingFirst = (condition) => {
  return new Promise((resolve, reject) => {
    if (condition) resolve("SUCCESS");
    reject("FAILED AD THE FIRST ATTEMPT");
  });
};
const printing = (string) => {
  console.log(string);
  return string;
};
doSomethingFirst(false)
  .then((result) => {
    return printing(result);
  })
  .then((result) => {
    return printing(result);
  })
  .then((result) => printing(result))
  .catch((error) => console.log(error))
  .finally(console.log("FINISH DOING THINGS"));
