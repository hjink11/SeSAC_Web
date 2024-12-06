const express = require("express");
const db = require("./models"); //모델!
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
const indexRouter = require("./routes/user");
app.use("/", indexRouter);

// TODO: 404 에러 처리
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  console.log("DB 연결 성공");
  console.log("----------");

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/user`);
  });
});
