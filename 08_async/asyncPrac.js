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

async function exec() {
  let kims = await call("kim");
  console.log(kims + " 반가워");
  let backk = await back();
  console.log(backk + " 을 실행했구나");
  let helll = await hell();
  console.log("여기는" + helll);
}

exec();
