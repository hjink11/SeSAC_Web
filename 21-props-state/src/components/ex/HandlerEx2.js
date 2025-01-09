import { useState } from "react";

export default function HandlerEx2() {
  const [word, setWord] = useState("검정색 글씨");
  const [fColor, setfColor] = useState("black");
  const red = () => {
    setWord("빨간색 글씨 ");
    setfColor("red");
  };
  const blue = () => {
    setWord("파란색 글씨");
    setfColor("blue");
  };

  return (
    <div>
      <p style={{ color: fColor }}>{word}</p>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>빨간색</button>
    </div>
  );
}
