import { Box1 } from "./components/Box";
import Test from "./components/Test";
import Bank from "./components/practice/Bank";

function App() {
  return (
    <>
      <h1>Redux 사용하기</h1>
      {/* index copy.js로 했던 실습 */}
      {/* <Test /> */}
      {/* <h2>여러개의 전역 state 사용하기 </h2> */}
      <Box1 />

      {/* 실습 */}
      <Bank />
    </>
  );
}

export default App;
