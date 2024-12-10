const express = require("express");
const app = express();
const session = require("express-session");
const PORT = 8080;

app.set("view engine", "ejs");

//세션 미들웨어 등록
app.use(
  session({
    //*secret:
    secret: "secret Key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000, //10분
    },
  })
);
/*secret:서명값(필수값)  >> string
 resave : 세션에 수정사항이 생기지 않더라도 매 요청마다 세션을 다시 지정할지 >> boolean (false 권장)
 saveUninitialized : 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 >> boolean (false 권장)
 cookie:{} 세션 쿠키에 대한 설정 (cookie.js의 config 참조)
 secure : ture일 때는 https에서만 세션을 주고 받는다. 
 name : 세션 쿠키의 이름(sessionID 값 저장하는 쿠키 이름, defult : connect.sid)
 */

app.get("/", (req, res) => {
  res.render("session");
});

//세션설정     세션 살아있는 동안에는 어느곳에서도 볼 수 있다.
app.get("/set", (req, res) => {
  //req.session.키이름=value
  req.session.name = "bana"; // 원하는 키(name) 값 저장
  res.send("세션설정 완료");
});

//확인(가져오기)
app.get("/get", (req, res) => {
  console.log(req.session); // 위에서 설정해서 무조건 어디서든 보임
  console.log(req.sessionID);
  res.send({ id: req.sessionID, name: req.session.name });
});

//삭제
app.get("/destroy", (req, res) => {
  console.log(res.session);
  req.session.destroy((err) => {
    if (err) throw err;
    res.send("세션삭제완료");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/*
console.log(req.session);   한번 설정후 어디서든 name 볼 수 있다. (세션 살아있으면/새로고침하면 죽음)
Session {
  cookie: {
    path: '/',
    _expires: 2024-12-09T07:03:43.273Z,
    originalMaxAge: 600000,
    httpOnly: true
  },
  name: 'bana'
*/
