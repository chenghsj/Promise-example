const fs = require("fs");

let uid = 3;

fs.readFile("./data/user.json", "utf8", function (err, data) {
  const userData = JSON.parse(data),
    userInfo = userData.filter((item) => item.id === uid)[0];

  fs.readFile("./data/userCourse.json", "utf8", function (err, data) {
    const userCourseData = JSON.parse(data),
      userId = userInfo.id,
      userCourse = userCourseData.filter((item) => item.uid === userId)[0].course;
    console.log(userCourse);

    fs.readFile("./data/course.json", "utf8", (err, data) => {
      const courseData = JSON.parse(data);
      let _arr = [];
      userCourse.map((id) => {
        courseData.map((item) => {
          if (item.id === id) {
            _arr.push(item);
          }
        });
      });

      const userCourseInfo = {
        userName: userInfo.name,
        courses: _arr,
      };

      fs.writeFileSync(`./data/${userCourseInfo.userName}.json`, JSON.stringify(userCourseInfo));
    });
  });
});
