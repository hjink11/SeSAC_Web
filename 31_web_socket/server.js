//npm i express ejs ws
const express = require("express");
const ws = require("ws"); // npm i ws
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

// !! 다름 const!
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// console.log("server", server);  //서버객체

//클라이언트 서버 연결시 클라이언트에게 고유한 id 만들기 위해 랜덤 문장열 2개 만듬
function generateUniqueId() {
  // 70년 날짜에 계산해서 36진수 문자열로
  const timestamp = Date.now().toString(36);
  console.log("timestamp", timestamp);

  const randomString = Math.random().toString(36).substring(2);
  console.log("randomstring", randomString);

  // 두 문장열 함쳐 id로
  return timestamp + randomString;
}

// console.log("id", generateUniqueId());
// console.log("abcdef".substring(2));  //cdef
// console.log("abcdefgh".substring(2, 5));   //cde

const sockets = []; // 소켓'들' 접속한 클라이언트들 socket을 저장하는
//{server}는 위에 app.listen임 포트를 이용해 특정 소켓을 찾고 연결
const wsServer = new ws.Server({ server });
/*
ws 모듈 이벤트 
 - connetion: 클라이언트와 웹소켓 서버가 연결되었을 때
 - message : 클라이언트에게 메세지 받았을때
 -error: 연결중 오류
 - close: 클라이언트와 연결 종료
*/
//---- 클라이언트와 웹소켓 서버가 연결되었을 때 이벤트 (클라이언트 소켓을 인자로)
wsServer.on("connection", (socket) => {
  // console.log(socket); // 연결될 하나의 클라이언트에 대한 정보
  const clientId = generateUniqueId(); // 위에 함수로 클라이언트id
  console.log(`클라이언트 id: [${clientId}] 연결됨`);
  sockets.push(socket); // 접속한 클라이언트(브라우저) socket을 배열에 추가
  // 클라이언트에게 메세지 받는 이벤트 일어났을 떄
  socket.on("message", (message) => {
    // message 는 버퍼 객체라서 toString으로
    console.log(message.toString());
    // console.log(message);  // 버퍼가 나옴
    console.log(`${clientId}에게 받은 메세지 :${message}`); // message.toString() 암시적으로 호출(알아서 문자열로)
    // socket.send("안녕하세요?");     //현재 연결된 소켓에게만 message 보내는 것

    // 연결된 모든 클라이언트에게 보내는 것
    sockets.forEach((client) => {
      client.send(`${message}`); // 소켓들에게
    });
  });
});
