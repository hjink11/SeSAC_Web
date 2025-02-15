import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* path="/"은 app.js 니까 여기 Main 안써도 알아서 아래 라우트 정한 페이지 나온다! */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </>
  );
}

export default App;
