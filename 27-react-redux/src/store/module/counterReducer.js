//할일 1. src/store/module 에 개별적인 전역 state 선언
//---> reducer를 생성 함수가 선언되어 있어야 한다.

//액션은 박스에서 디스패치로 전달 받음
//action을 리턴하는 함수 (나중에 payload같은 인자도 받을 수 있다. )
////aciton을 리턴하는 함수 + ()인자 받아서 type:"",payload:"인자" 할 수도
const initialState = 1;
export const countPlus = () => {
  return { type: "count/INCREMENT" };
};
export const countMinus = () => {
  return { type: "count/DECREMENT" };
};

export const counterReducer = (state = initialState, action) => {
  console.log("count data", action);
  //{ type: "count/INCREMENT" }
  //{ type: "count/DECREMENT" }
  switch (action.type) {
    case "count/INCREMENT":
      return state + 1;
    case "count/DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
