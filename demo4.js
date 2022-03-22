const fs = require("fs");

let num = 1;

function readFile(path, isSetError) {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err || isSetError) {
        rej("fail: " + num++);
      }

      const resData = JSON.parse(data);
      res(resData);
    });
  });
}

readFile("./data/user.json")
  .then((res) => {
    console.log(res);
    return Promise.resolve("success");
    // return new Promise((resolve, reject) => {resolve('success')})
  })
  .then((res) => {
      console.log(res);
  });

// readFile("./data/userCourse.json").then((res) => {
//   console.log(res);
// });

// readFile("./data/course.json").then((res) => {
//   console.log(res);
// });

// Promise.all([readFile("./data/user.json"), readFile("./data/userCourse.json", true), readFile("./data/course.json", true)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// 失敗會回傳第一個失敗的 promise 結果
