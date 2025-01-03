const express = require("express");
const app = express();
const PORT = 8080;

//미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//index
// app.get("/", (req, res) => {
//   res.render("index");
// });

//라우터
//const indexRouter = require("./routes") //아래와 같은거
const indexRouter = require("./routes/index"); //라우트에 만들었던
app.use("/", indexRouter);

//404
app.get("*", (req, res) => {
  //res.render("404");
  res.send("<h2>Page Not Found</h2>");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
