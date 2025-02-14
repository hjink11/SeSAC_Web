import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Test from "./components/Test";
import Test2 from "./components/Test2";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </>
  );
}

export default App;
