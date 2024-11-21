const express = require("express");
const app = express();
const PORT = 8080;

//미들웨어 설정
//ejs views

app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일관리
// app.use("/static", express.static(__dirname + "public"));

//body parser설정  post body 읽으려면
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//요청 응답

app.get("/", function (req, res) {
  res.render("index");
  console.log("nodemon 실행!");
});

// form get 요청
//action의 /getForm과 아래가 같아야함
app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("form data get 요청 성공!");
  // title "GET"
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
  //요청에는 응답을 꼭 해야함 res.
});

//form post 요청
app.post("/postForm", function (req, res) {
  console.log(req.body);

  //res.send("form data post 요청 성공 ");
  res.render("result", {
    title: "POST",
    userInfo: req.body,
  });
});
//위에 post는 이메일 없으니 if문으로 다르게 () 없이 처리 할 수 도...

//form validation post 요청
app.post("/js-form-check", function (req, res) {
  console.log(req.body);
  res.send("js 유효성 검사 ");
});

// 실습
//pra1으로 들어갔을 떄 prac1 화면을 보여주고
//prac2로 들어갔을 때 prac2 화면을 보여줘야 힘
//prac1 prac2 에는 각각 get,post 를 통한 폼 요청이 있고
//결과는 prc_result 를 공통으로

//1.prac1 get 요청
app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});

//2.prac2 get 요청
app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});

//3.주소 지정  form get 요청
app.get("/practice1Form", function (req, res) {
  res.render("practice/practice_result", {
    userInfo: req.query,
  });
});

//4.주소 지정 form post 요청
app.post("/practice2Form", function (req, res) {
  console.log(req.body); //지우기 확인용
  res.render("practice/practice_result", {
    userInfo: req.body,
  });
});

// api 4개 지정해야함
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
