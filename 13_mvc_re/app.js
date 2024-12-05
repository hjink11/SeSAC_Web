const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 분리 index(메인페이지)와 user
const indexRouter = require("./routes/index"); // index는 생략이 가능하다.
app.use("/", indexRouter); //미들웨어처럼 use
// localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작한다.

const userRouter = require("./routes/user");
app.use("/user", userRouter);

// [404 error]
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
