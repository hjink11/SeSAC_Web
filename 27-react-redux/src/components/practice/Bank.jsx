import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../store/module/bankReducer";
import { useState } from "react";

export default function Bank() {
  const [inputNumber, setInpuetNumber] = useState(0);
  //bank 리듀서를 !!!  store에 저장되어 있는 state 값져오기
  // state.bank는 rootReducer에서 정한 reducer 이름임!
  const balance = useSelector((state) => state.bank);
  console.log("잔액", balance); //잔액 0 (기본값)

  //이름 디스패치 아니라도 됨 (액션을 전달하는 )
  const dispatch = useDispatch();

  return (
    <div>
      <h2>코딩온 은행</h2>
      {/* toLocaleString() 금액에 쉼표 알아서 찍어줌  */}
      <p>잔액 : {balance.toLocaleString()}원</p>
      <input
        type="number"
        step={10000}
        value={inputNumber}
        onChange={(e) => setInpuetNumber(Number(e.target.value))}
      />

      {/* 리듀스에 함수 만들어서 import 해서 바로 사용 {} 없이
      (inputvalue)가 reducer에 payload로 */}
      <button onClick={() => dispatch(deposit(inputNumber))}>입금</button>
      <button onClick={() => dispatch(withdraw(inputNumber))}>출금</button>
    </div>
  );
}
