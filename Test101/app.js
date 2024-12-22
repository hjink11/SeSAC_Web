const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Multer 설정
const upload = multer({
  dest: "uploads/",
});
app.use("/uploads", express.static("uploads"));

//라우터
const indexRouter = require("./routes");
app.use("/", indexRouter);

//404

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
