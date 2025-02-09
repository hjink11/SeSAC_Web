import { useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", { autoConnect: false });
export default function Start() {
  // 소켓과 연결하려면 아래 부분이 있어야 함 useEffect 부분이랑s
  const initSocketConnect = () => {
    // console.log(socket.connected);   // false
    if (!socket.connected) socket.connect(); // 소켓과 접속
  };

  // 랜더링시 socket과 연결
  useEffect(() => {
    initSocketConnect();

    socket.emit("test", "테스트");
    socket.on("test2", (str) => {
      console.log("서버에서 온 메세지", str);
    });
  }, []);
  return <p>소켓 연결 테스트입니다~</p>;
}
