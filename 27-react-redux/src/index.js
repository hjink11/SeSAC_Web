import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// App.js(x)보다 더 상위객체? 에서 감싸서 해줘서 App 밑에 있는 컴포넌트는 다 값을 사용?

// 3. store 설정
// module/index.js 에서 통합한 rootReducer를 value로 전달
//store 만드는 함수 import! store는 프로젝트에 하나만 있어야 한다.
// const store = configureStore({ reducer: reducer });
// 그래서 위에 지우기 /store/index.js 에서 만든 reducer 모음을 연결 (import)
const store = configureStore({ reducer: rootReducer });

//4. App 컴포넌트 자식 컴포넌트에서 사용 가능 하도록
//store props로 store 전달

root.render(
  // Provider로 감싸야하고 import (store를 넣어 상태를 props)
  <Provider store={store}>
    <App />
  </Provider>
);
