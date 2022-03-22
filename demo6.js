const fetch = require("node-fetch");

function getData() {
    return fetch("http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
//   return new Promise((resolve, reject) => {
//     reject("failure");
//   });
}

// async 當前同一作用域的函數為異步關係
async function logData() {
  const data = await getData();
  console.log(data);
}

logData();

// console.log(logData())
console.log('Global')

// await 是一個操作符
// 等待 Promise 回傳結果
