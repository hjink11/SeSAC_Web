import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";

export function Box1() {
  return (
    <div style={{ border: "1px dashed pink", padding: "10px" }}>
      <h4>Box1</h4>
      <Box2 />
    </div>
  );
}

export function Box2() {
  // const state = useSelector((state) => state);
  //combineReduers의 인자로 전달했던 객체의 key.. >> inData, count
  // console.log("Box2", state);
  // {isData: false, count: 1} -> reducer들

  //  = useSelector() 는 store에 저장되어 있는 state 가져오기
  // = useDispatch() 는 action을 전달하기 위한 dispatch 함수 제공
  // dispatch 는 action을 reducer에 전달해주는 함수
  // 여러 개가 저장되어 있는 store에서 특정한 state만 가지고 오는 것
  const isData = useSelector((state) => state.isData);
  const count = useSelector((state) => state.count);
  //console.log(count); //1
  //console.log(isData); //false

  console.log("countPlus", countPlus());

  // 액션을 발생시키는 함수
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1px solid skyblue", padding: "10px" }}>
      <h4>Box2 입니다.</h4>
      <p>count:{count}</p>
      <p>isData:{isData.toString()}</p>
      {/* // dispatch 는 action을 reducer에 전달해주는 함수 */}
      <button onClick={() => dispatch({ type: "count/INCREMENT" })}>
        count + 1
      </button>
      <button onClick={() => dispatch({ type: "count/DECREMENT" })}>
        count - 1
      </button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>
        to {(!isData).toString()}
      </button>
      <br />
      <h5>action 리턴 함수 사용</h5>
      <button onClick={() => dispatch(countPlus())}>count + 1</button>
      <button onClick={() => dispatch(countMinus())}>count - 1</button>
    </div>
  );
}
