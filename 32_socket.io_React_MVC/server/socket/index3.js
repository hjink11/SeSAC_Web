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
    console.log(socket.id);
    // chatting1.jsx

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

        //----추가 3  입장 성공시 해당 클라이언트에게 전체 user 정보 넘겨줌
        io.emit("updateNicks", nickInfo);
      }
    });

    socket.on("disconnect", () => {
      io.emit("notice", nickInfo[socket.id] + " 님이 퇴장했습니다.");
      delete nickInfo[socket.id]; // 객체에서 제거
    });

    // 하나의 클라이언트에게 메세지르 받고
    // 전체 혹은 DM 보내고자 하는 클라이언에게 메세지 전송
    socket.on("send", (msgData) => {
      // msgData:{myNick,dmTo:socket.id, msg}
      if (msgData.dmTo === "all") {
        io.emit("message", {
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: false, // dm이 아니라고 false
        });
      } else {
        // dm 일때 dm 받는 클라이언트에게 보이도록
        io.to(msgData.dmTo).emit("message", {
          //dmTo는 받는 사람 socket.id 만
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: true, // dm이라고
        });
        // dm일때 나한테도 보이도록
        socket.emit("message", {
          // 나한테도 내가보낸 dm 메세지
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: true, // dm이라고
        });
      }
    });
  });
}

module.exports = socketHandler;
