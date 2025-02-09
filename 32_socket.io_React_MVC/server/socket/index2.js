const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000", // 배포시에는 자기 퍼블릭 ip
    },
  });

  // 사용자 아이디와 닉네임 정보들
  const nickInfo = {}; //{socket.id : nickname}

  io.on("connection", (socket) => {
    console.log(socket.id); // 연결시가 아니라 닉네임 생기고 입장시 출력
    // chatting1.jsx
    // io.emit("notice", nickInfo[socket.id] + " 님이 입장했습니다.");

    // chatting2.jsx
    // 닉네임 사용 2 닉네임 중복체크
    socket.on("checkNick", (nickname) => {
      // indexOf 대신 include 로 0,1
      if (Object.values(nickInfo).includes(nickname)) {
        // 닉네임이 nickInfo에 존재하는 경우 (중복)
        socket.emit("error", "이미 존재하는 닉네임 입니다.");
      } else {
        // 닉네임이 중복이 아닌 경우 => 사용가능
        nickInfo[socket.id] = nickname; // {키(id):값(닉네임)} 추가
        // 중복되지 않는 닉네임 클라이언트로
        socket.emit("entrySuccess", nickname);

        // 입장 성공시 입장메세지 보내시 옮겼음
        io.emit("notice", nickInfo[socket.id] + " 님이 입장했습니다.");
      }
    });

    // .emit 없이 퇴장(socket 없어지면) 이벤트 받는듯
    socket.on("disconnect", () => {
      io.emit("notice", nickInfo[socket.id] + " 님이 퇴장했습니다.");
      delete nickInfo[socket.id]; // 객체에서 제거
    });
  });
}

module.exports = socketHandler;
