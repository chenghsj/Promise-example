// function doSth(t) {
//   return function () {
//     if (--t === 0) {
//       cb();
//     }
//   };
// }

// function logSth(cb) {
//   console.log("log 1");
//   cb();
// }

// function logSth2(cb) {
//   console.log("log 2");
//   cb();
// }

// function logSth3() {
//   console.log("log 3");
// }

// function doSth(t) {
//   return function () {
//     if (--t === 0) {
//       logSth(function () {
//         logSth2(function () {
//           logSth3();
//         });
//       });
//     }
//   };
// }

// let fn = doSth(4, logSth.bind(null, logSth2));

// fn();
// fn();
// fn();
// fn();

// Promise -> 異步問題同步化解決方案
// Promise 構造函數 需要new
// Promise 參數 executor 執行器
// executor -> resolve reject 函數
// executor 在 new Promise 執行

//executor 是同步執行的
let promise = new Promise((resolve, reject) => {
  //   resolve("成功");
//   reject("失敗");
throw new Error('Error')
});

//then 是異步調用的
promise
  .then(
    (res) => {
      console.log(1);
    },
    (err) => {
      console.log("then ", err);
    }
  )
  .catch((err) => console.log("catch"));

console.log("Global");
