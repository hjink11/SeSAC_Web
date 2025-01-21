//1 reducer 만들기

//action type의 문자열을 상수화 (이건 기본 만들고 나중에 만들었음)
const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

//액션 리턴 함수 (이것도 기본 만들고 나중에 만듬)
export const deposit = (payload) => ({
  type: DEPOSIT,
  payload: payload,
});
export const withdraw = (payload) => ({ type: WITHDRAW, payload });

// 1번 reducer 만들기
const initialState = 0;

export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
