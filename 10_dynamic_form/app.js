const express = require("express");
const app = express();
const PORT = 8080;
// 미들웨어 설정

//1 뷰폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

//2 body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api
app.get("/", (req, res) => {
  res.render("index");
});

//ajax GET
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //res.send("응답!")    //render는 아님
  res.send(req.query);
});

//body parser 설정해야 body를 읽을 수 있음
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//axios 요청
//axios GET
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//axios POST
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch 요청
app.get("/fetch", (req, res) => {
  console.log(req.body);
  //res.send("응답완료");    //클라이언트에서 .text 사용
  //아래는 JSON 사용
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
