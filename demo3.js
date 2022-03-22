const fs = require("fs");

let uid = 2;

function readFile(path, prevData) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, "utf8", function (err, data) {
      if (err) reject(err);
      const resData = JSON.parse(data);
      resolve({ prevData, resData });
    });
  });
}

readFile("./data/user.json")
  .then((res) => {
    const { resData } = res;
    const userInfo = resData.filter((item) => item.id === uid)[0];

    // throw new Error("fail");
    return readFile("./data/userCourse.json", userInfo);
  })
  .then((res) => {
    const { prevData, resData } = res;
    const userId = prevData.id;
    const userCourse = resData.filter((item) => item.uid === userId)[0].course;

    return readFile("./data/course.json", { userName: prevData.name, userCourse });
  })
  .then((res) => {
    const { prevData, resData } = res;
    const userCourse = prevData.userCourse;

    let _arr = [];

    userCourse.map((id) => {
      resData.map((item) => {
        if (id === item.id) {
          _arr.push(item);
        }
      });
    });
    const userCourseInfo = { userName: prevData.userName, courses: _arr };

    fs.writeFileSync(`./data/${userCourseInfo.userName}.json`, JSON.stringify(userCourseInfo));
  })
  .catch((err) => {
    console.log(err);
  });
