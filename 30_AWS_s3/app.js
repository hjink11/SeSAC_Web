// npm i aws-sdk
// npm i multer-s3@2.10.0

const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const path = require("path");
const app = express();
const PORT = 8080;
dotenv.config();

// view engine 설정
app.set("view engine", "ejs");

// aws s3 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

// multer 설정1
// 서버에 사진을 저장하는 기존 코드
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname); // 확장자
//     cb(
//       null,
//       path.basename(file.originalname, ext) + Date.now() + ext, // 파일이름지정
//     );
//   },
// });

// multer 설정2
// s3에 사진을 저장하는 코드
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한 설정

    // 아래 주석 key/버킷에 들어가면 이 이름이 나오고,
    // 클릭해서 들어가면 경로가(객체url) 보임(location)
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index", { imageUrl: "" });
});

//sigle은 input에 name="image" 임
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  /* 
  {
  fieldname: 'image',
  originalname: 'Home_Alone_1990_BRRip_720p_H264-3Li.mp4_001444152.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  size: 52982,
  bucket: 'hj91-bucket',
  key: '1738575176942-Home_Alone_1990_BRRip_720p_H264-3Li.mp4_001444152.jpg',
  acl: 'public-read',
  contentType: 'application/octet-stream',
  contentDisposition: null,
  contentEncoding: null,
  storageClass: 'STANDARD',
  serverSideEncryption: null,
  metadata: null,
  location: 'https://hj91-bucket.s3.ap-northeast-2.amazonaws.com/1738575176942-Home_Alone_1990_BRRip_720p_H264-3Li.mp4_001444152.jpg',
  etag: '"aafa711fd0b88440b078c9ac0464fff8"',
  versionId: undefined
}
  */

  if (req.file) {
    const imageUrl = req.file.location; // S3에 업로드된 파일의 경로(위에 참고)
    //res.render("index", { imageUrl });  // 이전
    return res.render("index", { imageUrl }); // return 추가
  } else {
    res.send("이미지를 주세요...");
  }

  //res.send("이미지 잘 받았다!");   // 응답이 두번이라 오류나서
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
