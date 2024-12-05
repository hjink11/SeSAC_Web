const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

//라우터
const indexRouter = require("./routes"); //index만 파일이름 생략가능
app.use("/", indexRouter);

//404
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
