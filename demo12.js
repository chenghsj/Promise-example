const MyPromise = require("./Promise5.js");

let promise1 = new MyPromise((resolve, reject) => {
  resolve("Promise 1");
  //   reject("Error");
});

let promise2 = promise1.then(
  () => {
    // return new Error("Error");
    // return Promise.resolve('Promise resolve');
    // return 'Then Promise'
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        // resolve("new Promise resolve");
        resolve(
          new MyPromise((resolve, reject) => {
            resolve("new Promise resolve");
          })
        );
      }, 2000);
    });
    // return 1;
  },
  (reason) => {
    return reason;
  }
);

promise2
  .then()
  .then()
  .then(
    (value) => {
    //   console.log("Success: ", value);
    throw Error('Error')
    },
    (reason) => {
      console.log("Failure: ", reason);
    }
  )
  .catch((e) => {
    console.log(e);
  });
