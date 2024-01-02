// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done"), 2000);
//   setTimeout(() => reject("Whoops"), 2000);
// })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finish"));

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

delay(3000).then(() => alert(`Run after 3 seconds`));
