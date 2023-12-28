let now = new Date();

console.log(now);

let Jan01_1070 = new Date(0);
console.log(Jan01_1070);

let Jan02_1070 = new Date(24 * 3600 * 1000);
console.log(Jan02_1070);

let Dec31_1969 = new Date(-2 * 3600 * 1000);
console.log(Dec31_1969);

let date = new Date("2017-01-26");
console.log(date);

console.log(new Date(2011, 0, 1, 0, 0, 0, 0));
console.log(new Date(2011, 0, 1));

console.log(new Date(2011, 0, 1, 2, 3, 4, 567));

console.log(new Date().getHours());
console.log(new Date().getUTCHours());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
console.log(new Date().getDay());
console.log(new Date().getTime());
console.log(new Date().getTimezoneOffset());

let today = new Date();

today.setHours(0);
console.log(today);

today.setHours(0, 0, 0, 0);
console.log(today);

console.log(new Date(2013, 0, 32));

let date2 = new Date(2016, 1, 28);
console.log(date2.getFullYear());
// console.log(date2.setDate(date2.getDate() + 4));
console.log(date2.setDate(date2.getDate() + 5));
// date2.setDate(date2.getDate() + 2);
console.log(date2);

let date3 = new Date();
console.log(date3);
date3.setSeconds(date.getSeconds() + 70);
console.log(date3);

let date4 = new Date(2016, 0, 2);
console.log(date4);
date4.setDate(1);
console.log(date4);
date4.setDate(0);
console.log(date4);

console.log(+new Date());

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date();

let time = end - start;

console.log(time);

let mulai = Date.now();

for (let i = 0; i < 10000000; i++) {
  let doSomething = i * i * i;
}

let selesai = Date.now();

let selisih = selesai - mulai;

console.log(selisih);

const diffSubtract = (date1, date2) => {
  return date2 - date1;
};

const diffGetTime = (date1, date2) => {
  return date2.getTime() - date1.getTime();
};

console.log(new Date(0));
console.log(new Date());
console.log(Date.now());

const bench = (f) => {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();

  for (let i = 0; i < 100000; i++) f(date1, date2);

  return Date.now() - start;
};

let time1 = 0;
let time2 = 0;

bench(diffSubtract);
bench(diffGetTime);

for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

console.log(`Time of diffSubtract = ${time1} ms`);
console.log(`Time of diffGetTime = ${time2} ms`);

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log(new Date(ms));

let date5 = new Date(ms);
console.log(date5);

console.log(performance.now());

// Task 1
let date6 = Date.parse("2012-02-20T03:12");
console.log(new Date(date6));

let d1 = new Date(2012, 1, 20, 3, 12);
console.log(d1);
