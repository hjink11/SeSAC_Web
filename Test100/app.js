const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터
const indexRouter = require("./routes");
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
