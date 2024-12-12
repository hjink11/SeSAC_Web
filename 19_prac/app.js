const express = require("express");
const db = require("./models"); // index 불러오기
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//라우팅
const indexRouter = require("./routes");
app.use("/", indexRouter);

//sequleize db 연결
db.sequelize.sync({ force: false }).then((result) => {
  //console.log(result); //엄청 긴정보 나중에 주석
  console.log("DB 연결!");
  console.log("--------");
  app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
  });
});
