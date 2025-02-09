const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000", // 배포시에는 자기 퍼블릭 ip
    },
  });
  io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("test", (str) => {
      console.log("str", str);
      socket.emit("test2", "메세지 잘 받았습니다!");
    });

    //수업실습1
    socket.on("bye", (str) => {
      socket.emit("bye2", "잘가요");
      console.log("client :", str);
    });
    socket.on("study", (str) => {
      socket.emit("study2", "공부하세요");
      console.log("client :", str);
    });
    socket.on("hello", (str) => {
      socket.emit("hello2", "안녕하세요");
      console.log("client :", str);
    });
  });
}

module.exports = socketHandler;
