import { useRef, useState } from "react";

export default function SetText() {
  const refVal = useRef<number>(0); //변수로 사용할 ref
  const refInput = useRef<HTMLInputElement>(null); // ref 객체를 이용해서 DOM 접근시 null 초기값 전달 필수

  //    const [text, setText] = useState<string>("")
  const [text, setText] = useState("");

  //refVal 변수를 변경하는 함수
  const changeRef = () => {
    refVal.current += 1;
    console.log("refVal", refVal.current);
  };

  //state 변경
  const changeState = () => {
    // setText(refInput.current.value)  // 원래 이렇게 했음
    if (refInput.current) {
      // refInput 초기값 null이니까 null이 아니면??
      console.log("text state 변경완료");
      setText(refInput.current?.value);
    }
    // refInput가 있을 때만 변경
  };

  // ref는 콘솔에서만  변하는게 보이고 state 눌러야 보여=ㅇ서
  const checkString = () => {
    console.log("state string", text); //text 아무것도 안나옴
    console.log("input value ref", refInput.current?.value); // 인풋에 입력하는대로
  };

  return (
    <div>
      <h2>useRef & useState 사용해보기 </h2>
      <input type="text" ref={refInput} onChange={checkString} />
      <br />
      <button onClick={changeState}>state 변경!</button>
      <button onClick={changeRef}>ref +1</button>
      <p>state : {text} </p>
      <p>refVal : {refVal.current} </p>
      <p>refInput의 value : {refInput.current?.value} </p>
      {/* ? 있을때 없을때  */}
    </div>
  );
}
