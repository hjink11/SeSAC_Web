import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Practice1() {
  // h3 를 바꿔주기 위한 state
  const [fromServerStr, setFromServerStr] = useState("");

  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  // 처음 랜더링시
  useEffect(() => {
    initSocketConnect();

    socket.on("bye2", (str) => {
      // 받은 문자열을 h3의 state를 변경
      setFromServerStr(str);
    });
    socket.on("study2", (str) => {
      setFromServerStr(str);
    });
    socket.on("hello2", (str) => {
      setFromServerStr(str);
    });

    // unmount 됐을 때
    return () => {
      // 컴포넌트 없어졌을 때 안전하게 제거되도록
      socket.off("bye2");
      socket.off("study2");
      socket.off("hello2");
    };
  }, []);

  // 이벤트 핸들러 중복 등록될 수 있기 때문에 useEffect 안에 작성해야
  //   socket.on("hello2", (str) => {
  //     setFromServerStr(str);
  //   });

  // map 으로 돌려서 key 와 버튼이름을 줄 배열
  const events = ["bye", "study", "hello"];

  // 버튼의 onclick
  const emitToServer = (eventName) => {
    socket.emit(eventName, eventName); // ex) "study", "study"
  };

  return (
    <>
      <h3>실습1번</h3>
      {events.map((event) => (
        <button key={event} onClick={() => emitToServer(event)}>
          {event}
        </button>
      ))}

      <h3>server:{fromServerStr}</h3>
    </>
  );
}
