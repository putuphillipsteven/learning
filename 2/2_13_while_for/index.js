let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

console.log(!!0);
console.log(!!1);

i = 3;

while (i) {
  console.log(i);
  i--;
}

i = 3;

while (i) console.log(i--);

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) {
  console.log(i);
}

i = 0;
for (i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);

i = 0;
for (; i < 3; i++) {
  console.log(i);
}

i = 0;
for (; i < 3; ) {
  console.log(i++);
}

console.log(i);

let sum = 0;

// while (!!1) {
//   let value = +prompt("Enter a number", "");
//   if (!value) break;
//   sum += value;
//   console.log(value);
// }

// alert(`Sum: ${sum}`);

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i}, ${j})`, "");
//   }
// }
// alert("Done!");

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i}, ${j})`, "");
//     if (!input) break outer;
//   }
// }

// alert("DONE");

i = 3;

while (i) {
  console.log(i--);
}

i = 0;
while (++i < 5) console.log(i);
i = 0;
while (i++ < 5) console.log(i);

for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 5; ++i) console.log(i);

for (let i = 2; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}`);
}

i = 0;
while (i < 3) {
  console.log(`number ${i}`);
  i++;
}

const repeatTillCorrect = () => {
  while (!!1) {
    let input = prompt("Input number greater than 100", "");
    if (input > 100) break;
  }
};

let test;
console.log(!!test);

let input;
console.log(input <= 100);

const repeatTillCorrect2 = () => {
  let input;
  do {
    input = prompt("Input number greater than 100", "");
  } while (input <= 100 && input);
};

const findPrime = (n) => {
  for (let i = 2; i <= n; i++) {
    if (i === 2) {
      console.log(i);
    } else if (i === 3) {
      console.log(i);
    } else if ((i % 2 !== 0) & (i % 3 !== 0)) {
      console.log(i);
    } else {
      continue;
    }
  }
};

findPrime(50);

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  console.log(i);
  for (let j = 2; j < i; j++) {
    console.log(`${i}|${i} % ${j}`);
    if (i % j == 0) continue nextPrime;
  }
  console.log(`${i}prm`);
  console.log(`${i}`);
}

const findPrime2 = (n) => {
  check: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue check;
    }
    console.log(i);
  }
};

findPrime2(10);
