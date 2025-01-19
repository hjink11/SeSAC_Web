import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./style/main.scss";
import Student from "./pages/Student";
import NotFound from "../src/pages/NotFound";

function App() {
  return (
    <>
      {/* <Main /> */}

      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/student" element={<Student />}></Route> */}
        <Route path="/student/:Sname" element={<Student />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
