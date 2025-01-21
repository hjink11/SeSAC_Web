//할일 1. src/store/module 에 개별적인 전역 state 선언
//---> reducer를 생성 함수가 선언되어 있어야 한다.

const intialState = false;

export const isDataReducer = (state = intialState, action) => {
  console.log("isData action", action); //{type: 'isData/CHANGE'}
  if (action.type == "isData/CHANGE") return !state;
  return state; // 기존 state 유지
};
