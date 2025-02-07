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
  res.render("talk");
});

// socket 연결
io.on("connection", (socket) => {
  console.log("connected > ", socket.id, socket.rooms);

  // --[실습] 3 입장
  // 1. 나를 제외 모두에게
  socket.broadcast.emit("notice", `${socket.id}님이 입장하셨습니다.`);
  // [실습4]  4-2  하나에게서 받아서 전체에
  socket.on("send", (msg) => {
    console.log(`${socket.id}:${msg}`);
    io.emit("message", { id: socket.id, message: msg });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
