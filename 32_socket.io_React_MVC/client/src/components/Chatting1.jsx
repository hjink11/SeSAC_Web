import { useEffect, useState } from "react";
import "../style/chatting.css";
import Notice from "./Notice";
import SpeechChat from "./SpeechChat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Chatting() {
  const initSocketConnect = () => {
    if (!socket.connectd) socket.connect();
  };
  const [msgInput, setMsgInput] = useState(""); // 메세지 입력 input
  const [chatList, setChatList] = useState([
    // type에 따라서 메세지 저장하는 배열
    {
      type: "me",
      content: "내가 보낸 메세지",
    },
    {
      type: "other",
      content: "다른 사람이 보낸 메세지",
    },
    {
      type: "notice",
      content: "공지사항 메세지(입장, 퇴장)",
    },
  ]);

  useEffect(() => {
    initSocketConnect();

    // 소켓에게 test라는 이벤트에는 어떤함수가 동작할 것인지 말해줘야 함!!
    // socket.on("이벤트", handler);
    // 이벤트가 발생할 때마다 실행될 handler함수를 등록
    // socket.on을 여러번 발생시키면 handler가 여러번 등록됨
    //  > 중복 실행 가능성이 있어서 중복 등록은 지양한다.
    // socket.on("test", () => {
    //   console.log("ㅇㅇㅇㅇ");
    //   console.log("ㅇㅇㅇㅇ");
    // });

    // [문제점1]: newChatList 를 만들 때 chatList 가 mount된 시점의 chatList!!
    // -----> list에 type과 content가 쌓이지 않는다.
    // chatList 는 타입, 메세지 있는 배열
    /* const noticeHandler = (notice) => {
        const newChatList = [
        ...chatList, // 항상 mount된 시점의 초기값 배열 [1,2,3]
             // 등록한 당시 초기 chatList를 계속 사용하기 때문에
        { type: "notice", content: notice }, //원래 배열에 추가 항상 4번째 요소가 됨
      ];
      setChatList(newChatList);
    };

    socket.on("notice", noticeHandler); */
  }, []);

  // --- 2 Effect는 종속배열있어 랜더링 + chatList 변경시마다 작동해서 변경된 chatList
  useEffect(() => {
    // chatList가 변경될 때마다 이벤트핸들러 재등록
    // 기존 chatList가 기준이 아닌 변경된 chatList가 기준이 될 수 있도록
    // [해결1] >> [문제점2] 이벤트 핸들러 재등록  ->1을 해결했지만 여전히 문제점
    const noticeHandler = (notice) => {
      const newChatList = [
        ...chatList, // 변경된
        { type: "notice", content: notice },
      ];
      setChatList(newChatList);
    };
    console.log("이벤트 등록");
    socket.on("notice", noticeHandler);

    /* [해결2] */
    // 클리업함수는 unmount 뿐만 아니라 useEffect가 다시 실행되기 직전에도 실행
    return () => {
      // Effect 안에 return()은 unmount!
      console.log("이벤트 해제");
      socket.off("notice", noticeHandler);
    };
  }, [chatList]);
  //--> 그래서 처음랜더링(등록,해제,등록)->다른사람 입장(해제,등록) 콘손에

  // 메세지 전송시(폼을 전송 onSubmit) 사용되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 막기
  };

  return (
    <>
      <ul>
        <li>채팅 UI 만들기(실습2)</li>
        <li>입장 공지(실습3)</li>
      </ul>

      <div>
        <div className="container">
          <header>코코아톡🍫</header>
          <section>
            {chatList.map((chat, key) =>
              chat.type === "notice" ? (
                <Notice chat={chat} key={key} />
              ) : (
                <SpeechChat chat={chat} key={key} />
              )
            )}
          </section>
          <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
            {/* <select id="dm-select"></select> */}
            <input
              type="text"
              placeholder="메세지 입력"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button>전송</button>
          </form>
        </div>
      </div>
    </>
  );
}
