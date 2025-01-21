import CustomHook from "./components/CustomHook.jsx";
import Form from "./components/Form.jsx";
import FormPrac from "./components/practice/FormPrac.jsx";
import ProductFilter from "./components/practice/ProductFilter.jsx";
import UseCallbackEx1 from "./components/UseCallbackEx1.jsx";
import UseCallbackEx2 from "./components/UseCallbackEx2.jsx";
import UseMemo1 from "./components/UseMemo1.jsx";
import UseMemoObj from "./components/UseMenoObj.jsx";
import UseReducer from "./components/UseReducer.jsx";
import useTitle from "./hooks/useTitle.js";

function App() {
  // 커스텀 hook
  useTitle("hook 배워보기");

  return (
    <>
      {/* <UseMemo1 /> */}
      {/* <UseMemoObj /> */}
      {/* <UseCallbackEx1 /> */}
      {/* <UseCallbackEx2 /> */}
      {/* <UseReducer /> */}
      <CustomHook />
      {/* <Form /> */}
      {/* <FormPrac /> */}

      {/* 노션 실습 */}
      <ProductFilter />
    </>
  );
}

export default App;
