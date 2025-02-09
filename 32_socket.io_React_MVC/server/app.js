const express = require("express");
const http = require("http");
const cors = require("cors");
// const socketIO = require("socket.io");  // socket > index로 이동
const socketHandler = require("./socket/index3"); // 추가(index 수정할때마다 바꿨다)
const indexRouter = require("./routes");
const PORT = 8080;

const app = express();
const server = http.createServer(app);
// const io = socketIO(server); // socket > index로 이동
socketHandler(server); //추가

app.use(cors());
const prefix = "/api";
app.use(prefix, indexRouter); // localhost:8080/api

// 이 서로 접속하지 않아서 주소 없이
server.listen(PORT, () => {
  console.log("server is open! Port is", PORT);
});
