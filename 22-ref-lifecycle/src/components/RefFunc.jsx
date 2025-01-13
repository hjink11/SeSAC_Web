import { useRef, useState } from "react";

//DOM 요소를 선택하기 위한 ref
export function RefFunc1() {
  //1. ref 객체 만들기
  const inputRef = useRef();

  //3. Ref.current 에 접근해 원하는 작업 진행
  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  const handleDisable = () => {
    inputRef.current.disabled = true;
  };

  return (
    <div>
      {/* 2. 선택하고 싶은 태그에 ref 전달 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisable}>disabled</button>
    </div>
  );
}

//변수처럼 사용하는 ref
export function RefFunc2() {
  const ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1;

  const plusRef = () => {
    ref.current += 1;
    console.log("ref.current", ref.current);
  };
  const plusState = () => {
    setState(state + 1);
    console.log("state", state);
  };
  const plusVar = () => {
    variable += 1;
    console.log("variable", variable);
  };

  //버튼 눌렀을 때 ref 자체(콘솔확인)는 플러스 되지만 h4가 변하지 않음(리랜더링x) 그러다 state 버튼 누르면 변함 (state는 랜더링 돼서 = 리랜더링)
  //var는 ref처럼 변하지만 state 누르면 오히려 초기화 1로 된다 = 리랜더링 될때 초기화

  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>Plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>Plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVar}>Plus variable</button>
    </div>
  );
}
