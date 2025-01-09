import { useState } from "react";

export default function FunctionState() {
  //기존 js 사용   (전체 다시 렌더링 되고)
  //   let apple = "사과";
  //    const inEng = () => {
  //     //apple = "apple";
  //     const content = document.querySelector(".state");
  //     //console.log(apple);   //안나왔어
  //     content.innerHTML = "apple";
  //   };

  // 2. state 사용   (이 함수 부분만 렌더링 가상DOM)
  //   const [apple, setApple] = useState("사과");
  //   const inEng2 = () => {
  //     setApple("apple");
  //   };

  //   return (
  //     <div>
  //       <div className="state">{apple}</div>
  //       {/* <button onClick={inEng}> 영어로 변경</button> */}
  //       <button onClick={inEng2}> 영어로 변경</button>
  //     </div>
  //   );

  //3. Vanilla JS 사과 > apple > 사과 > apple
  //   const changeLang = () => {
  //     const content = document.querySelector(".state");
  //     content.innerText === "사과"
  //       ? (content.innerText = "apple")
  //       : (content.innerText = "사과");
  //   };

  //   return (
  //     <div>
  //       <div className="state">사과</div>
  //       <button onClick={changeLang}>언어 변경</button>
  //     </div>
  //   );

  // 이게 react의 방법
  const [showEnglish, setShowEnglish] = useState(true);
  const changeLang2 = () => {
    setShowEnglish(!showEnglish); //true라면 false로, false라면 true로 변경
  };

  return (
    <div>
      <div className="state">{showEnglish ? "apple" : "사과"}</div>
      <button onClick={changeLang2}>언어 변경?</button>
    </div>
  );
}
