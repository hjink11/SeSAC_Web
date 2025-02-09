import { useEffect, useState } from "react";
import "../style/chatting.css";
import Notice from "./Notice";
import SpeechChat from "./SpeechChat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Chatting2() {
  const initSocketConnect = () => {
    if (!socket.connectd) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
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

  // 추가
  const [nickName, setNickName] = useState(null); // 나의 닉네임 저장 변수
  const [nickNameInput, setNickNameInput] = useState(""); // nickname input value 관리

  useEffect(() => {
    // initSocketConnect();
  }, []);

  // --- 2 Effect는 종속배열있어 랜더링 + chatList 변경시마다 작동해서 변경된 chatList
  useEffect(() => {
    const noticeHandler = (notice) => {
      const newChatList = [
        ...chatList, // 변경된
        { type: "notice", content: notice },
      ];
      setChatList(newChatList);
    };
    console.log("이벤트 등록");
    socket.on("notice", noticeHandler);
    return () => {
      // Effect 안에 return()은 unmount!
      console.log("이벤트 해제");
      socket.off("notice", noticeHandler);
    };
  }, [chatList]);
  //--> 그래서 처음랜더링(등록,해제,등록)->다른사람 입장(해제,등록) 콘손에

  // 메세지 전송시 사용되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 막기
  };

  ///원래 랜더링시 initSocketConnect();했지만 채팅 참가시로 바꿈//
  const join = () => {
    // 랜더링이 아니라 참가했을때 연결이 떄문에
    initSocketConnect(); // 닉네임 검사 이벤트 위해 여기서도 연결
    // 닉네임 사용 1. 중복체크 위해 서버에 닉네임 전달
    socket.emit("checkNick", nickNameInput);
  };
  // 새롭게 on은 useEffect에서 받아야 하니까
  useEffect(() => {
    // 닉네임 중복시
    socket.on("error", (errmsg) => {
      alert(errmsg);
    });

    // 닉네임 사용가능
    socket.on("entrySuccess", (myNick) => {
      // nickName의 초기값은 null 임
      // 입장에 성공하면 nickName : string이 들어옴
      setNickName(myNick);
    });
  }, []);

  return (
    <>
      <ul>
        <li>닉네임 받고 중복체크(서버)</li>
        <li>퇴장 공고</li>
      </ul>
      {!nickName ? (
        <div className="entry-box">
          <input
            type="text"
            placeholder="닉네임 입력"
            value={nickNameInput}
            onChange={(e) => setNickNameInput(e.target.value)}
          />
          <button onClick={join}>채팅방 입장하기</button>
        </div>
      ) : (
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
      )}
    </>
  );
}
