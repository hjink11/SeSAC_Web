const express = require("express");
const app = express();
const PORT = 8080;

// midware 설정 추가
//뷰엔진 추가
app.set("view engine", "ejs");
app.set("/views", "views");

// static 폴더 설정 추가
app.use("/static", express.static(__dirname + "/public"));
// static 이라는 경로를 퍼블릭 대신 사용

app.get("/", function (request, response) {
  // requset는 클라이언트가 서버에게 보내는 요청
  // response는 서버가 클라이언트에게 보내는 응답

  console.log(request);
  // response.send('hell express!!')
  //ejs 사용 아래는
  response.render("test", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추워요",
    },
  });
});

// get /login
app.get("/login", function (req, res) {
  res.render("login", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추워요",
    },
  });
});
// get /register
app.get("/register", (req, res) => {
  res.render("register", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추워요",
    },
  });
});

app.use(function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost${PORT}`);
});
