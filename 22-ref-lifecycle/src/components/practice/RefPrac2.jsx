import { useRef, useState } from "react";

export default function RefPrac2() {
  const [bgColor, setBgColor] = useState("");

  //ref
  const inputRef = useRef();

  const bgChange = () => {
    console.log(inputRef.current.value);
    setBgColor(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <>
      <h2>ref 실습2</h2>
      <div
        style={{
          width: "150px",
          height: "50px",
          backgroundColor: bgColor,
        }}
      >
        <input type="text" ref={inputRef} />
        <button onClick={bgChange}>색 적용</button>
      </div>
    </>
  );
}
