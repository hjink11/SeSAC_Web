const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//TO DO 쿠키 미들웨어 설정

app.get("/", (req, res) => {
  res.render("index");

  //TODO 쿠키값 가져오기 및 index.ejs 보내기
  //res.render("index", {popip:쿠키값})
});

app.post("set-cookie", (req, res) => {
  //쿠키 생성하기]
  res.send("쿠키 생성 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
