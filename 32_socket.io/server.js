const express = require("express");
const app = express();
const PORT = 8080;

// socket.io의 소켓이 http모듈로 생성된 서버에서만 동작 그래서 아래
const http = require("http");
const { emit } = require("process"); // 소켓 이벤트 만드는 명령ㅓ
//app도 서버고 아래도 서버 app. 안쓰고 server.으로
const server = http.createServer(app);
const io = require("socket.io")(server);

//미들웨어 설정
app.set("view engine", "ejs");
//api
app.get("/", (req, res) => {
  res.render("client");
});
app.get("/clinet_prac", (req, res) => {
  res.render("clinet_prac");
});
app.get("/chat-room", (req, res) => {
  res.render("rooms");
});

//---- socket 코드 작성  on은 이벤트 받는것/  io는 전체 연결된소켓들
io.on("connection", (socket) => {
  //   console.log(socket);  // 엄청 긴 정보
  // 기본적으로 id 제공
  console.log("socket.id >>", socket.id); // 어느페이지 들어가든 나옴

  //------------
  // 1. client > server > client
  // -- [on과 emit 사용해보기]
  socket.on("event_name", (arg1, arg2, arg3, cb) => {
    console.log("[event_name]:: ", arg1, arg2, arg3);
    cb(arg1, arg2, arg3); // 이벤트를 받았고 그것을 콜백으로 클라이언트로 보냄
  });
  // 클라이언트에서 cb 없이 이벤트 보냈을때
  socket.on("cb_test", (arg, cb) => {
    console.log("[cb_test]::", arg);
    console.log(cb); //undefined
  });

  //--- 3-1 server > client, 클라이언트 전체에게 io
  io.emit("entire_client", "전체에게 보냅니다!");
  //--- 3-2 server > client, 클라이언트 하나에게
  socket.emit("one_client", "하나의 클라이언트 보냅니다!");

  //------- 채팅만들기!--------
  //--- ver1. 나의 메세지가 나에게만 보임
  socket.on("new_message1", (arg, cb) => {
    console.log("[new_message1]::", arg);
    cb(arg); // 나에게만 데이터를 전달/ 콜백으로는 나에만
  });

  //---ver2. 나의 메세지가 모두에게 보이도록
  socket.on("new_message2", (arg) => {
    console.log("[new_message2]::", arg);
    io.emit("message_render", arg);
    // io는 연결된 전체 소켓들  socket은 연결된 하나의 소켓
  });

  // -----실습1----------
  socket.on("hello", (msg, cb) => {
    console.log("clinet:", msg);
    cb(msg);
  });
  socket.on("study", (msg) => {
    console.log("clinet:", msg);
    socket.emit("study2", msg);
  });
  socket.on("bye", (msg) => {
    console.log("clinet:", msg);
    socket.emit("bye2", msg);
  });

  //------ 방있는 채팅----
  //console.log("socket.rooms", socket.rooms);
  // 위에 콘솔에 찍히는 것 socket.rooms Set(1) { 'kB0glE-JNKzhvt2FAAAB' }
  //--> 방이 없을 때 {socket.id} 만 보인다  + Set은 방의 배열같은
  // console.log(socket.room); // 방없을때 undefined  이건 현재 방! rooms는 전체방?

  socket.on("join", (roomname) => {
    // 입력받은 채팅방 이름을 인자로 받음

    // 2. 서버에서 방열기
    //join(): 같은 방에 들어가 있는 사람들끼리만 통신할 수 있도록
    socket.join(roomname); // 방을 연다 (roomname)으로
    socket.room = roomname; // 다른것에서도 roomname 확인할 수 있도록 정보 추가(방이름)
    // console.log("socket.rooms", socket.rooms); // 이름까지 나옴 a Set도 추가
    //윗줄 결과 socket.rooms Set(2) { 'Qh9nspwnMuweXjwQAAAD', 'a' }

    // 3-1 입장메세지 모두에게 보내기(나를포함) server >client (userjoin은 이벤트임)
    // io.to(roomname).emit("userjoin", `[${socket.id}]님 입장`);

    // 3-2 입장메세지 나를 제외하고 모두에게 보내기 server >client (userjoin은 이벤트임)
    // broadcast: 내가 제외됨 (다른 사람에게만 뜬다. )
    socket.broadcast.to(roomname).emit("userjoin", `[${socket.id}]님 입장`);
    // 나를 제외한 다른사람에게 나의 아이디와 입장메세지가 뜬다.
  });
  // 6. client > server, 폼으로 메세지 받아 전체 클라이언트에게 메세지 보내기
  socket.on("message", (msg) => {
    console.log("클라이언트의 메세지", msg);

    // 내가 포함된 방? >> socket.room
    console.log("내가 포함된 방의 이름 ", socket.room);
    //나포함 전체에게 받은 메제시 전달 +id
    io.to(socket.room).emit("message_toAll", msg, socket.id);
    // to(roomname)과 같이 방이름이라서?
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
