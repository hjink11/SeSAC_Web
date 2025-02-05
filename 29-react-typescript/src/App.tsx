import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practice from "./pages/Practice";
import PostList from "./components/practice/PostList";
import Matzip from "./pages/Matzip";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/codingon" element={<PostList />} />
        <Route path="/practice/matzip" element={<Matzip />}></Route>
      </Routes>
    </div>
  );
}

export default App;
