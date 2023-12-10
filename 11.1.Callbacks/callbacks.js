// "use strict";

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));
//   document.head.append(script);
// }

// loadScript("./alert.js", (script) => {
//   alert(`Cool, ${script.src} is loaded`);
//   loadScript("./alert.js", (script) => {
//     alert(`Cool, the second script is loaded `);
//   });
// });

// loadScript("./alert.js", step1());

// function step1(error, script) {
//   if (error) {
//     alert(error);
//   } else {
//     loadScript("./alert2.js", step2);
//   }
// }

// function step2(error, script) {
//   if (error) {
//     console.log(error);
//   } else {
//     loadScript("./alert3.js");
//   }
// }

// Repetition number 2

const loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
};

loadScript("./alert.js", () => alert("this is callback after alert"));
