const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models");
//const db = require("./models")

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//router
const indexRouter = require("./routes");
app.use("/", indexRouter);

sequelize
  .sync({ force: false }) // 테이블 있으면 사용 아니면 새로만듬 true는 무조건 새로 만든다
  .then(() => {
    console.log("db connection success");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connection Err");
    console.log(err);
  });
