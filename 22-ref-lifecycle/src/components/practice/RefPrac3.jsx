import { useRef } from "react";

export default function RefPrac3() {
  const inputRef = useRef();

  const number1 = Math.floor(Math.random() * 11);
  const number2 = Math.floor(Math.random() * 11);
  const op = Math.floor(Math.random() * 3);
  const opArr = ["X", "+", "-"];

  const operator = opArr[op];

  const result = () => {
    let answer;
    if (operator === "X") {
      answer = number1 * number2;
    } else if (operator === "+") {
      answer = number1 + number2;
    } else {
      answer = number1 - number2;
    }
    console.log(answer);

    if (answer === Number(inputRef.current.value)) {
      alert("정답입니다.🐸");
    } else {
      alert(`오답입니다. 정답은 ${answer} 입니다 🙊`);
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <h2>ref 실습3</h2>
      <h3>
        {number1} {operator} {number2}
      </h3>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={result}>정답 제출</button>
    </>
  );
}
