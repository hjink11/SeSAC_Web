import LifeCycleClass from "./components/LifecycleClass";
import LifeCycleFunc from "./components/LifecycleFunc";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunc";
import TestCss from "./components/TestCss";
import Container from "./components/practice/Container";
import FakePost from "./components/practice/FakePost";
import RealPost from "./components/practice/RealPost";
import RefPrac1 from "./components/practice/RefPrac1";
import RefPrac2 from "./components/practice/RefPrac2";
import RefPrac3 from "./components/practice/RefPrac3";

function App() {
  return (
    <div>
      {/* Ref */}
      {/* <RefClass1 />
      <RefClass2 /> */}
      <RefFunc1 />
      {/* <RefFunc2 /> */}

      {/* lifecycle */}
      <LifeCycleClass />
      <LifeCycleFunc />
      {/* <TestCss /> */}

      <Container>
        {/* <FakePost /> */}
        <RealPost />
      </Container>

      {/* ref 실습 */}
      <RefPrac1 />
      <RefPrac2 />
      <RefPrac3 />
    </div>
  );
}

export default App;
