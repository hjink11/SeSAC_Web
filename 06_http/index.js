const http = require("http");
const fs = require("fs");

const server = http.createServer(function (requset, response) {
  // console.log(requset) // 요청 객체 정보

  console.log("url: ", requset.url);

  // response 실습 아래
  // response.write('<p>응답1</p>')
  // response.write('<p>응답2</p>')
  // response.write('<p>응답3</p>')
  // response.end('<h3>응답 종료</h3>')

  // html 읽기를 try문에서
  try {
    //실행코드
    const data = fs.readFileSync("./inde.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(data);
  } catch (err) {
    //try문에서 어떤 에러가 발생 되었는지 err객체 넘겨줌( 생략 가능, 이름 마음대로)
    //try문에서 에러가 났을 때
    console.log(err);
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });

    // 404.html 만들고 파일이름 오타 났을 때 아래 문구 대신 페이지 보여줌 현재 이것만 보임
    // response.end('<h1>page not found</h1>')
    //아래는 강의 슬랙 코드에 없었음
    const data = fs.readFileSync("./404.html");
    //response.end("page not found");
    response.end(data);
  }
});

const PORT = 8080;

// 서버 이벤트 on - connection, request
server.on("connection", function (request, response) {
  console.log("connection event 발생");
});

server.on("request", function (request, response) {
  console.log("request event 발생");
});

// 포트 열기
server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});
