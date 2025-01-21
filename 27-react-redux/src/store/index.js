import { combineReducers } from "@reduxjs/toolkit";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { bankReducer } from "./module/bankReducer";
import { reducerTest } from "./module/reducerTest";

// 2.src/store/index.js
// /module에서 만들어준 여러개의 reduce를 통합
// store/module에서 만들어준 여러개 reducer 통합
// 만든 reducer들을 모아줌
const rootReducer = combineReducers({
  isData: isDataReducer, // import해야한다.
  count: counterReducer,
  //만약 전역 관리 state가 추가되면 이 곳에도 추가
  bank: bankReducer,
  //test 다시 만들어봄
  test: reducerTest,
});

//2-2 내보내기
//src/index/js에서 쓰일 예정 (store)
export default rootReducer;
