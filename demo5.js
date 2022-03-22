const fs = require("fs");
const { resolve } = require("path");

function readFile(path, isSetError) {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err || isSetError) rej("fail");

      const resData = JSON.parse(data);
      res(resData);
    });
  });
}

Promise.race([
  // readFile("./data/user.json"), readFile("./data/userCourse.json"), readFile("./data/course.json", true)
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// return the first complete one, either fulfilled or rejected
// 測試資源或接口速度
