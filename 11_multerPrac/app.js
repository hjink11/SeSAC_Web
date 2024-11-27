const express = require("express");
const multer = require("multer"); //모듈 불러오기
const { userInfo } = require("os");
const path = require("path"); //파일 경로 불러오기 위해
const app = express();
const PORT = 8080;

//미들웨어
app.set("view engine", "ejs");
app.set("views", "./views"); //디폴트라 안해도... 그래도

//body-parser
app.use(express.urlencoded({ extended: false })); //ture도 상관 없다.
app.use(express.json());

//static 폴더
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/static"));

//multer 설정
const uploadSetting = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //확장자
      //id, name, pw, file
      //req.body,userid ==='id'
      done(null, req.body.userid + Date.now() + ext);
    },
  }),
});

// api 루트
app.get("/", (req, res) => {
  res.render("index");
});

//form post 요청
app.post("/register", uploadSetting.single("profileImg"), function (req, res) {
  console.log(req.body);
  /* req.body
  {
  userid: 'eee',
  password: 'eee',
  userName: 'eee',
  age: '123'
 }
  */

  console.log(req.file); // 이걸 보려면 인자로 가운데 가져와여함
  //res.send("받았다");
  /* req.file
 {
  fieldname: 'profileImg',
  originalname: '26139_img.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'eee1732677624202.png',
  path: 'uploads\\eee1732677624202.png',
  size: 469955
}
 */

  res.render("result", {
    ...req.body, //uerInfo:req.body 라고 써도 되고
    src: req.file.path,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
