let a;
let b = 11;

console.log(a ?? b);

let user;
console.log(user ?? "anonymous");

user = "John";
console.log(user ?? "anonymous");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName);

let height = 0;

console.log(height || 100);
console.log(height ?? 100);

height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);

console.log(area);

console.log(1 && 2);
console.log(0 && 4);

height = height ?? 100;
console.log(height);
