const promise = () => {
  return new Promise((resolve, reject) => {
    resolve("SUCCESS");
  });
};

promise().then((result) => {
  console.log(result);
});
