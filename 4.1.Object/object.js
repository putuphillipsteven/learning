// Creating empty object
let user = new Object();
let user2 = {}; //This declaraton is called an object literal

let user3 = {
  name: "John",
  age: 30,
};

console.log(user3);

console.log(user3.name);
console.log(user3.age);

user3.isAdmin = true;
console.log(user3);

// Removing property
delete user3.isAdmin;
console.log(user3);

// Use multiword property, we must use double quoted
user3["likes birds"] = true;
console.log(user3);

delete user3["likes birds"];
console.log(user3);

let key = "likes birds";
user3[key] = true;

console.log(user3);

// let key2 = prompt("What do you want to know about the user?", "");
// alert(user3[key2]);

/* let fruit = prompt("Which fruit to buy?", "");
let bag = {
  [fruit]: 5,
};

alert(bag.apple);
alert(bag["apple"]);
 */

/* let fruit = prompt("Which fruit to buy", "");
let bag = {};

bag[fruit] = 5;
alert(bag[fruit]);
 */
let fruit2 = "apple";
let bag2 = {
  [fruit2 + "Computers"]: 5,
};

console.log(bag2);

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user4 = makeUser("John", 30);
console.log(user4);

function makeUser2(name, age) {
  return {
    name,
    age,
  };
}
let user5 = makeUser("John", 30);
console.log(user5);

let name = "Putu";
let user6 = {
  name,
  age: 30,
};

console.log(user6);

let obj = {
  // No limitation for javascript property names
  for: 1,
  let: 2,
  return: 3,
};

let obj2 = {
  0: "test",
};

console.log(obj2["0"]);
console.log(obj2[0]);

let obj3 = {};

obj3.__proto__ = 5;
console.log(obj3.__proto__);

let user7 = {};
console.log(user7.noSuchProperty === undefined);

// "in"
// "key" in object

let user8 = {
  name: "John",
  age: 30,
};

console.log("age" in user8);
console.log("name" in user8);
console.log("address" in user8);

let key3 = "age";
console.log(key3 in user8);

let obj4 = {
  test: undefined,
};

console.log(obj.test);
console.log("test" in obj4);

let user9 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user9) {
  console.log(key);
  console.log(user9[key]);
}

let codes = {
  "+62": "Indonesia",
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "Usa",
};

for (let code in codes) {
  console.log(code);
  console.log(codes[code]);
}

console.log(String(Math.trunc(Number("49"))));
console.log(String(Math.trunc(Number("+49"))));
console.log(String(Math.trunc(Number("1.2"))));

let user10 = {
  name: "John",
  surname: "Smith",
};
user10.age = 25;

for (let prop in user10) {
  console.log(prop);
}

// Task 1
let user11 = {};
user11["name"] = "John";
user11["surname"] = "Smith";
user11["name"] = "Pete";
delete user11["name"];
console.log(user11);

// Task 2

let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    return true;
  }
  return false;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let salaries2 = {};

const sumSalary = (obj) => {
  let sum = 0;
  for (let user in obj) {
    sum += obj[user];
  }
  return sum;
};

console.log(sumSalary(salaries));
console.log(sumSalary(salaries2));

const multipleNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
};

let menu = {
  width: 200,
  height: 300,
  title: "My Menu",
};

console.log(multipleNumeric(menu));
