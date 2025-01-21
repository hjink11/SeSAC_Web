import { useDispatch, useSelector } from "react-redux";

// 여러개 리듀스에 만들어서 함

export default function Test() {
  // store의 state 값 가져오기 useSelector 인자를 함수를 넘겨줘야한다.
  // 그 함수는 state를 매개변수로 받을 수 있고 return값은 원하는 변수값설정
  //const number = useSelector((state) => state);  //원래 reducer
  const number = useSelector((state) => state.test);
  console.log("number > ", number); //number >  1(초기값)

  // action을 발생시키는 dispatch 함수를 실행시키는 hook함수
  // 인자로 원하는 action 객체를 넘겨줘야 한다.
  // 상태(state)에 변화가 필요하면 액션이 발생해야
  // reducer가 수행할 작업을 설명
  const dispatch = useDispatch();
  return (
    <>
      <h4>state값 가져오기</h4>
      <p>store 에 저장되어 있는 number state: {number}</p>

      <h4>state값 변경하기 </h4>
      {/* dispatch 이용해 액션 객체 넘기기 (여기서 type을 정함) */}
      <button onClick={() => dispatch({ type: "증가" })}>
        number state +1
      </button>
      <button onClick={() => dispatch({ type: "감소" })}>
        number state -1
      </button>
    </>
  );
}
