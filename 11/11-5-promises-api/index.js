Promise.all([
  new Promise((resolve) => {
    setTimeout(() => resolve(1), 3000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve(2), 2000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve(3), 1000);
  }),
]).then((result) => console.log(result));

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

let requests = urls.map((url) => fetch(url));

Promise.all(requests).then((responses) =>
  responses.forEach((response) => console.log(`${response.url} new: ${response.status}`))
);

let names = ["iliakan", "remy", "jeresig"];

let nameRequests = names.map((name) => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then((responses) => {
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
    return responses;
  })
  .then((responses) => {
    return Promise.all(responses.map((r) => r.json()));
  })
  .then((users) => {
    users.forEach((user) => console.log(user.name));
  })
  .catch((error) => console.log(`Error: ${error.message}`));

let allSettledUrls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.allSettled(allSettledUrls.map((url) => fetch(url))).then((results) => {
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      console.log(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      console.log(`${urls[num]}: ${result.reason}`);
    }
  });
});
