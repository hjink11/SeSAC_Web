import { ClassProps, ClassProps2 } from "./components/ClassProps";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import ClassState from "./components/ClassState"; // 하나만 불러올 때는 {} 없이
import FunctionState from "./components/FunctionState";
import StateClassP from "./components/practice/StateClassP";
import StatePrac from "./components/practice/StatePrac";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import HandlerEx from "./components/ex/HandlerEx";
import HandlerEx2 from "./components/ex/HandlerEx2";
import HandlerEx3 from "./components/ex/HandlerEx3";
import HandlerEx4 from "./components/ex/HandlerEx4";
import PororoObj from "./components/PororoObj";
import EntirePractice from "./components/practice/EntirePractice";
import PropsMap1 from "./components/PropsMap1";
import PropsMap2 from "./components/PropsMap2";
import Alphabet from "./components/Alphabet";
import MapPrac from "./components/practice/MapPrac";
import MapPrac2 from "./components/practice/MapPrac2";

function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 1 },
    { name: "pear", krPrice: 10000, number: 4 },
    { name: "apple", krPrice: 20000, number: 5 },
  ];

  return (
    <div>
      {/* <h2>props 사용</h2> */}
      {/* <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2 name="루피" color="pink" nickname="공주" fontColor="blue" /> */}

      {/* <h3>함수형 컴포넌트 props 사용해보기</h3> */}
      {/* <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4> */}

      {/* <h2>state</h2>
      <h3>클래스형</h3>
      <ClassState />
      <h3>함수형</h3>
      <FunctionState /> */}

      {/* <h3>state 실습 class</h3>
      <StateClassP />
      <h3>state 실습함수형</h3>
      <StatePrac /> */}

      {/* <h2> event </h2>
      <SyntheticEvent />
      <Counter /> */}

      <br />
      <hr />
      <h2>실습!!!!</h2>
      {/* <HandlerEx />
      <br />
      <HandlerEx2 />
      <br />
      <HandlerEx3 /> */}
      <br />
      <HandlerEx4 />
      <br />
      <h3>뽀 실습</h3>
      {/* <PororoObj /> */}
      <br></br>
      <h2>과일 실습문제!</h2>
      {/* <EntirePractice /> */}
      <br />
      <h3>map</h3>
      {/* <PropsMap1 arr={arr} />
      <PropsMap2 arr={arr} />
      <PropsMap2 /> */}
      <Alphabet />
      <h3>실습</h3>
      <MapPrac />
      <br />
      <MapPrac2 />
      <br />
    </div>
  );
}

export default App;
