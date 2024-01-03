const printSomething = (condition, word) => {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => resolve(word), 5000);
    } else reject("FAILED ATTEMPT");
  });
};

printSomething(true, "SUCCESS ATTEMPT")
  .then((result) => {
    setTimeout(() => console.log(result), 5000);
    return result;
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
