const express = require("express");
const app = express();
const PORT = 8080;
const http = require("http");
const { emit } = require("process");
const server = http.createServer(app);
const io = require("socket.io")(server);

//미들웨어 설정
app.set("view engine", "ejs");
//api
app.get("/", (req, res) => {
  res.render("talk_dm");
});

// 닉네임 사용 2
const nickInfo = {}; // 사용자id별 닉네임 저장할 객체
//{socketId:nickname, ...} 콘솔에
// socket 연결
io.on("connection", (socket) => {
  // 닉네임 사용 2
  socket.on("checkNick", (nickname) => {
    // nickInfo[socket.id] = nickname;
    // console.log(nickInfo); //{ B0Nkt1okCan0uOqAAAAH: 'sfdg' }
    // console.log(Object.values(nickInfo)); //["a"."b"] 객체 값만 배열로 key도 할수 있어
    // console.log(Object.values(nickInfo).indexOf(nickname)); //객체에서 닉네임의 인덱스
    // 닉네임 있을 때는 -1  보다 큰 숫자가 나오고 없을떄는 -1?
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      //console.log("존재하는 닉네임입니다.");
      //1. 입장실패
      socket.emit("error", "이미 존재하는 닉네임입니다");
    } else {
      // 입장 성공!!!!
      //console.log("존재하지 않는 닉네임입니다.");
      nickInfo[socket.id] = nickname; // 현재 클라이언트 닉네임 정보 넣기
      //-> 객체[키] = 값  아이디별로 닉네임 저장하는 것
      // 2 입장 성공 내 닉네임 정보 전달
      socket.emit("entrySuccess", nickname);
      // 3 입장성공 나를 제외 전체 전달
      socket.broadcast.emit(
        "notice",
        `${nickInfo[socket.id]}님이 입장하셨습니다.`
      );
    }
    // 4 입장 성공 나를 포함한 전체 클라이언트에게 전체 닉네임 정보 전달
    io.emit("updateNicks", nickInfo);
  });

  // console.log("connected > ", socket.id, socket.rooms);

  // --실습 3 입장 1. 나를 제외 모두에게
  // 4-2  하나에게서 받아서 전체에
  socket.on("send", (msg) => {
    // console.log(`${socket.id}:${msg}`);
    // 메세지 전달시 아이디 대신에 닉네임을 전달한다.
    io.emit("message", { id: nickInfo[socket.id], message: msg }); // 아이디가 아니라 닉네이정보임
  });

  // 클라이언트 퇴장 공고
  socket.on("disconnect", () => {
    // notice는 입장과 같은 이벤트지만 뒤에 데이터를 다르게 사용
    io.emit("notice", `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
    // nickInfo에서 클라이언트 정보 삭제
    delete nickInfo[socket.id]; // 객체에서 특정 데이터 삭제 구문
    console.log("delete?", nickInfo); //남은 사용자 다 나옴
    io.emit("updateNicks", nickInfo); // 닉인포(삭제, 추가시 보냄)
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
