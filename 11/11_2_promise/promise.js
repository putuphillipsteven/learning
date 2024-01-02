// let promise = new Promise(function (resolve, reject) {
//   resolve(console.log("---done---"));
//   reject(new Error(""));
//   setTimeout(() => resolve(""));
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 1000);
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// })
//   .finally(() => console.log("Promise Ready"))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done"), 1000);
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// })
//   .finally(() => console.log("promise ready"))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(
//   (script) => alert(`${script.src} is loaded`),
//   (error) => alert(`Error: ${error.message}`)
// );

// promise.then((script) => alert("Another handler..."));

function delay(ms) {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(), ms);
  // });
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("runs after 3 seconds"));
