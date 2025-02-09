import { useEffect, useMemo, useState } from "react";
import "../style/chatting.css";
import Notice from "./Notice";
import SpeechChat from "./SpeechChat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Chatting3() {
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
      name: "다른사람 닉네임", // 추가
      isDm: true, // 추가
    },
    {
      type: "notice",
      content: "공지사항 메세지(입장, 퇴장)",
    },
  ]);

  const [nickName, setNickName] = useState(null); // 나의 닉네임 저장
  const [nickNameInput, setNickNameInput] = useState(""); // nickname input value 관리

  //추가 3
  const [dmTo, setDmTo] = useState("all"); // select value 관리
  const [userList, setUserList] = useState({}); // 현재 접속해 있는 user 정보
  //{socket.id : nickname, ...}

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

    //--- 추가
    // 메세지 받는 이벤트 핸들러
    const messageHandler = (data) => {
      // data: {nick, message, isDm}
      const content = `${data.isDm ? "[DM]" : ""} ${data.message}`;
      const type = data.nick === nickName ? "me" : "other";
      const newChatList = [
        ...chatList,
        {
          type: type,
          content: content,
          isDm: data.isDm,
          name: data.nick,
        },
      ];

      setChatList(newChatList);
    };

    // 채팅 메세지 받는
    socket.on("message", messageHandler);

    return () => {
      // Effect 안에 return()은 unmount!
      console.log("이벤트 해제");
      socket.off("notice", noticeHandler);
      socket.off("message", messageHandler);
    };
  }, [chatList]);
  //--> chatList 변경시

  // 메세지 전송시 사용되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 막기

    if (msgInput.trim() === "") return setMsgInput(""); // setMsgInput의미 없고 함수 멈춤위해
    const sendData = {
      myNick: nickName,
      dmTo: dmTo, // 누구에게  "all" , "socket.id"  (select의 value)
      msg: msgInput,
    };
    socket.emit("send", sendData);
    setMsgInput(""); // 여기서 input 비워줌
  };

  ////////////////////
  const join = () => {
    // 랜더링이 아니라 참가했을때 연결
    initSocketConnect();
    // 닉네임 사용 1. 중복체크 위해 서버에 닉네임 전달
    socket.emit("checkNick", nickNameInput);
  };
  // 새롭게
  useEffect(() => {
    socket.on("error", (errmsg) => {
      alert(errmsg);
    });

    socket.on("entrySuccess", (myNick) => {
      // nickName의 초기값은 null 임
      // 입장에 성공하면 nickName : string이 들어옴
      setNickName(myNick);
    });

    // --추가-- 현재 접속한 클라이언트 정보를 모두 받아서 스테이트로 관리
    socket.on("updateNicks", (nickInfo) => {
      setUserList(nickInfo); // userList
    });
  }, []);

  // const userOptions = [];
  // for (let key in userList) {
  //   // ejs와는 다르게 나를 제외하고 dm
  //   if (key !== socket.id) {
  //     userOptions.push(<option value={key}>{userList[key]}</option>);
  //   }
  // }
  // userOptions = [
  //  <oprion value="sdifgjoijsh">allie</option>,
  //  <oprion value="sdsdfgjijsh">lie</option>,
  //]  이렇게 들어가 있다.

  //--- userList라는 state가 변경될때만 다시 메모리에 저장 (위에 부분을 다시)
  // 현재 Chatting3 컴포넌트에는 6개 state 있고
  // state 변경될때마다 for문이 실행됨 = 성능이 좋지 않음 그래서 메모리에(이정도는 안해도..)
  // userList외에 다른 state 변경될 때는 메모리에 저장된 값을 가져다 쓴다.
  const userOptions = useMemo(() => {
    const options = [];
    for (let key in userList) {
      if (key !== socket.id) {
        options.push(<option value={key}>{userList[key]}</option>);
      }
    }
    return options;
  }, [userList]);

  return (
    <>
      <ul>
        <li>메세지 보내기</li>
        <li>DM 보내기</li>
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
            <header>코코아톡🍫 myNick : {nickName}</header>
            <section>
              {chatList.map((chat, key) =>
                chat.type === "notice" ? (
                  <Notice chat={chat} key={key} />
                ) : (
                  <SpeechChat chat={chat} key={key} />
                )
              )}
              <div></div>
            </section>
            <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
              <select id="dm-select" onChange={(e) => setDmTo(e.target.value)}>
                <option value="all">전체</option>
                {userOptions}
              </select>
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
