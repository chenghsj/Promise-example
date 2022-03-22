const MyPromise = require("./MyPromise");

let promise = new MyPromise((resolve, reject) => {
  resolve("success");
  // reject("error");
  // throw new Error("Exception: Error");
  // setTimeout(() => {
  //   resolve("success");
  // }, 2000);
});

promise.then(
  (value) => {
    console.log("1: ", value);
  },
  (reason) => {
    console.log("rejected1: ", reason);
  }
);

promise.then(
  (value) => {
    console.log("2: ", value);
  },
  (reason) => {
    console.log("rejected2: ", reason);
  }
);
