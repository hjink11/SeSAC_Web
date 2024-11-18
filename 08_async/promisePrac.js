function call(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

function exec() {
  call("kim")
    .then((result) => {
      console.log(result, " 반가워");
      return back(); //return을 했었어야 then에 back의 result가 들어감 백그라운드처럼 프로미스 함수 계속 부르니까
    })
    .then((result) => {
      console.log(result + " 을 실행했구나");
      return hell();
    })
    .then((result) => {
      console.log("여기는" + result);
    });
}

exec();
