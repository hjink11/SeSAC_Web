const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. view engine 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. static 폴더 설정
app.use("/static", express.static(__dirname + "/public")); // /을 꼭
app.use("/uploads", express.static(__dirname + "/uploads")); //동적폼할때 추가

// 4. multer 설정
const upload = multer({
  dest: "uploads/", // 어디에 저장될지!
});

//경로 뿐  아니라 파일이름, 크기등을 지정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); // 어디에 저장될지 경로 설정!
      //  uploads 라는 폴더가 미리 만들어져있어야 함
      //done은 콜백함수 이름은 마음대로
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름.확장자) >> 확장자만
      const extension = path.extname(file.originalname); // .png .webp ,...

      //   path.basename(파일이름.확장자, 확장자) >> 파일이름만 리턴 //26139_img
      done(
        null, //아래는 중복이름있을까봐 date로
        path.basename(file.originalname, extension) + Date.now() + extension
      );

      console.log("path.basename", path.basename(file.originalname, extension));
      console.log("path.extname", path.extname(file.originalname));
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 }, // 5MB 바이트기준
});

app.get("/", (req, res) => {
  res.render("index");
});

//uploadDetail.single이 바꿈
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.body); // 파일 정보는 req.file 에서 확인
  console.log(req.file);
  /* 
{
  fieldname: 'userfile', // 폼 내부에 정의한 name 값
  originalname: '26139_img.png', // 원본 파일명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'image/png', // 파일타입
  destination: 'uploads/', // 파일 저장경로
  filename: '8e42f8a0c4d8d43663e93cc832b4590a', // 저장된 파일명
  // 업로드된 파일 전체 경로
  path: 'uploads\\8e42f8a0c4d8d43663e93cc832b4590a', 
  size: 469955 // 파일 크기 (byte)
}
*/

  res.send("응답!");
});

//하나의 input에 여러개
//.array 사용
app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  // console.log(req.file);  여러개는 이거 아니고
  console.log(req.files); // 여러개일때는 files!!!!!!! 배열 형태로
  //   {
  //     fieldname: 'multifiles',
  //     originalname: 'pooh3.png',
  //     encoding: '7bit',
  //     mimetype: 'image/png',
  //     destination: 'uploads/',
  //     filename: 'pooh31732518400150.png',
  //     path: 'uploads/pooh31732518400150.png',
  //     size: 296433
  //   }
  console.log(req.body);
  res.send("완료!!!");
});

// 여러개의 input에 파일 업로드
// .fields() 사용
// fields의 매개변수는 배열[{name:'name값1'},...]
app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    // upload.fields() 로 받아주는 req.files 객체 형태로 들어옴
    console.log(req.files);
    console.log(req.body);
    /* 
          {filename1:[{업로드 파일 정보}], 파일name2:[{업로드 파일 정보}], ...}
      */
    res.send("업로드 완료");
  }
);

//동적폼 파일 업로드  아래에 single안에 append 했던 이릉ㅁ?
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  // .then에 들어 있는거  destination: "uploads/"

  // encoding: "7bit"

  // fieldname: "dynamicFile"

  // filename: "pooh_7201732520726709.png"

  // mimetype: "image/png"

  // originalname: "pooh_720.png"

  // path: "uploads/pooh_7201732520726709.png"

  // size: 176304

  //하나의 객체에 합쳐서 보내는 방법
  //res.send(...req.body, ...req.file); //전개 연산자 ...
  res.send({ file: req.file, fileInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
