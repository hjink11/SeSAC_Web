import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); //useState는 함수형에서만 사용가능함 함수
  const increase = () => {
    //count = count + 1 은 불가능
    setCount(count + 1);
  };

  const decrease = () => {
    setCount((prevState) => {
      return prevState - 2; // 이전 상태에 연산
    });
  };
  return (
    <div>
      <h4>숫자 : {count}</h4>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
