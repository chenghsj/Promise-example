let promise = new Promise((resolve, reject) => {
  resolve("first resolve");
});

// promise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// promise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(res);
//       }, 2000);
//     });
//   })
//   .then((res) => {
//     console.log(res);
//   });

// promise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Error");
//       }, 2000);
//     });
//   })
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (reason) => {
//       console.log("rejected: ", reason);
//     }
//   );

// promise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Error");
//       }, 2000);
//     });
//   })
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (reason) => {
//       console.log("Rejected: ", reason); // Rejected: Error
//       // 默認 return undefined
//     }
//   )
//   .then(
//     (value) => {
//       console.log(value); //undefined
//       console.log("Fulfilled: ", value); // Fulfilled: undefined
//     },
//     (reason) => {
//       console.log(reason);
//       console.log("Rejected: ", reason);
//     }
//   );

// promise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Error");
//       }, 2000);
//     });
//   })
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (reason) => {
//       console.log("Rejected: ", reason); // Rejected: Error
//       // 默認 return undefined
//     }
//   )
//   .then((value) => {
//     throw new Error("Throw Error");
//   })
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (reason) => {
//       console.log("Exception: ", reason); // Exception:  Error: Throw Error
//     }
//   );

promise
  .then((res) => {
    return res;
  })
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error");
      }, 2000);
    });
  })
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log("Rejected: ", reason); // Rejected: Error
      // 默認 return undefined
    }
  )
  .then((value) => {
    throw new Error("Throw Error");
  })
  .then(
    (value) => {
      console.log(value);
    }
    // (reason) => {
    //   console.log("Then: ", reason);
    // }
  )
  .catch((err) => {
    console.log("Catch: ", err);
    return "Catch Error";
  })
  .then((value) => {
    console.log("Then: ", value);
  });

// catch 在 Promise 的源碼上就是一個 then，因此 catch 也是遵循 then 的運行源則
// 成功的條件
// then return 普通的 javascript value
// then return new Promise 的 resolve(value)
// 失敗的條件
// then return new Promise 的 reject(reason)
// then throw new Error

// promise 鏈式調用
// javascript jquery -> return this
// then 不具備 this
// return new Promise

let promise2 = promise.then(() => {
    // return first new Promise result
}).then(() => {
    // return second new Promise result
});

//return first new Promise result
// let promise2 = promise.then(() => {});

// return second new Promise result
// promise2.then(()=>{})
