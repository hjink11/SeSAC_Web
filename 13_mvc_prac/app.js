const express = require("express");
const app = express();
const PORT = 8080;

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
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

//404
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
