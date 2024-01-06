// const promise = () => {
//   return new Promise((resolve, reject) => {
//     resolve("SUCCESS");
//   });
// };

// promise().then((result) => {
//   console.log(result);
// });

// new Promise((resolve, reject) => {
//   throw new Error("Whoops");
// })
//   .catch((error) => {
//     console.log("The error is handled, continue normally " + error.message);
//   })
//   .then(() => console.log("Next successfull handler runs"));

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Not URI ERROR");
  }, 1000);
})
  .catch((error) => {
    if (error instanceof URIError) {
    } else {
      console.log("Cant handle such error");
      throw error;
    }
  })
  .then((result) => {
    console.log(`Result: ${result}`);
  })
  .catch((error) => {
    console.log(`The unknown error has occured: ${error.message}`);
  });

const taskOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Whoops");
    }, 1000);
  });
};

taskOne()
  .then((result) => console.log(result))
  .catch((result) => console.log(`Error: ${result}`));
