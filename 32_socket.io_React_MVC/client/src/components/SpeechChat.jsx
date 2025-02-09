export default function SpeechChat({ chat }) {
  // chat:{content, type, name?, isDm?}  ?은 들어올 수도 안 들어 올 수도
  return (
    <>
      {/*  class name이 speech (me | other) (dm | ) */}
      <div className={`speech ${chat.type} ${chat.isDm ? "dm" : ""}`}>
        {chat.type == "other" && <span className="nickname">{chat.name}</span>}
        <span className="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
