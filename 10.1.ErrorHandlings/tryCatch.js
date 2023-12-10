// try {
//   console.log("Start of try runs");
// } catch (err) {
//   console.log("Catch is ignored, because no error");
// }

// window.onerror = function (message, url, line, col, error) {
//   console.log(`${message}\n At ${line}: ${col} of ${url}`);
// };

const errorHandling1 = () => {
  try {
    console.log("Start of my runs");
    console.log("1");
    console.log("2");
    lalallaa;
    console.log("3");
  } catch (err) {
    throw err.stack;
  }
};

const somethingA = () => {
  console.log("printing");
  setTimeout(() => {
    try {
      console.log("Set Time Out 1000 printed");
    } catch (err) {
      throw err;
    }
  }, 1000);
  setTimeout(() => {
    try {
      console.log("Second Set Time Out 1000 printed");
    } catch (err) {
      throw err;
    }
  }, 1000);
};

let json = '{"name":"john", "age": 30}';
console.log(json);

let user = JSON.parse(json);
console.log(user);

json = "{bad json}";

const jsonParse = (json) => {
  try {
    let user = JSON.parse(json);
    console.log(user.name);
  } catch (err) {
    console.log("Our appologies, data errors");
    console.log(err.name);
    console.log(err.message);
  }
};

const somethingB = () => {
  jsonParse(json);
};

json = '{"age": 30}';

try {
  let user = JSON.parse(json);
  if (!user.name) throw new Error("Incomplete data: no name");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}

function readData() {
  let json = '{"age":30}';
  try {
    blablabla();
  } catch (err) {
    if (!(err instanceof SyntaxError)) {
      throw err;
    }
  }
}

try {
  readData();
} catch (err) {
  console.log("External catch got " + err);
  //   throw err;
}

try {
  console.log("try");
  if (confirm("Make an error?")) BAD_CODE();
} catch (err) {
  console.log("catch");
} finally {
  console.log("finally");
}

let num = 35;

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, also fucking integer");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || "errors occured");
console.log(`excecution took ${diff}ms`);

// function anjayMabar() {
//   badFunc();
// }

// anjayMabar();
