import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// App.js(x)보다 더 상위객체? 에서 감싸서 해줘서 App 밑에 있는 컴포넌트는 다 값을 사용?

//store 만드는 함수 import!
const store = configureStore({ reducer: reducer });

//reducer 만들기 (1개만 만들때 )
// state의 초기값은 매개변수의 default 값으로 설정
function reducer(numberState = 1, action) {
  // 버튼 온클릭으로 dispatch 액션 발생
  console.log("index에서 action 확인", action); //{type: '증가' or 감소}

  // 액션의 타입에 따라 상태를 변화시킨다. setNumber 처럼
  //if, switch 등등 사용시 꼭 else, default 등으로 return 다 해야함
  if (action.type == "증가") {
    return numberState + 1;
  } else if (action.type == "감소") {
    return numberState - 1;
  } else {
    return numberState; // return은 꼭!s
  }
}
root.render(
  // Provider로 감싸야하고 import (store를 넣어 상태를 props)
  <Provider store={store}>
    <App />
  </Provider>
);
