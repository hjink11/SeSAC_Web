import { useReducer, useState } from "react";

//상수로 넘기기 위해 선언 (상수객체 만들기) -보통 문자열들을 상수로 관리한다.
const BANK_ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

//useReduce 선언 전에 함수 만들어져 있어야 함

//dispatch의 요구사항인 action이 reducer의 두번째 인자로 들어온다.
// action = {type,payload}
const reducer = (prevState, action) => {
  console.log("dicpatch 함수가 호출되면, reducer 동작!");
  console.log("prevState", prevState); // money의 초기값 0 이나 이전값
  console.log("action", action); //anything
  //   stete는 꼭 return 해줘야 함
  // if 문 사용하면 꼭 else 사용해야 함
  switch (action.type) {
    case BANK_ACTION_TYPES.deposit:
      return prevState + action.payload;
    case BANK_ACTION_TYPES.withdraw:
      return prevState - action.payload;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 사용하기</h2>
      <p>현재 잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <br />
      {/* () =>{ dispatch({ type: "deposit" }) } 로 쓰지만 여기서는 {} 없이  */}
      {/* dispatch안에 들어가는 값은 타입이 같아야 함 number state는 문자열임 그래서 위에서 Number() 사용  */}
      <button
        onClick={() =>
          dispatch({ type: BANK_ACTION_TYPES.deposit, payload: number })
        }
      >
        예금
      </button>
      <button
        onClick={() =>
          dispatch({ type: BANK_ACTION_TYPES.withdraw, payload: number })
        }
      >
        출금
      </button>
    </div>
  );
}
