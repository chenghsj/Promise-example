const Promise4 = require("./Promise4");

let promise1 = new Promise4((resolve, reject) => {
  resolve("promise1 ");
});

let promise2 = promise1
  .then((value) => {
    // return Promise.resolve(value + "-> then -> promise2");
    return value + "-> then -> promise2";
  })
  .then((value) => {
    console.log(value);
  });
