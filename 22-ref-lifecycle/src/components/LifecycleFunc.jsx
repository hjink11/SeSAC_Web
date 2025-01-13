import { useEffect, useState } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  /*
  useEffect(()=>{},[])
useEffect(effect [, dependency_array])
- effect : 콜백 함수 
- dependency_array (의존성 배열) : 의존성 배열에 있는 데이터가 변하면 콜백 함수 실행 
- [] : mount 됐을 때만 동작
- 생략 : mount, update 시 언제나 동작
- [data] : mount, 'data'가 update되었을 때 동작
*/
  //mount 시점에서 실행
  useEffect(() => {
    console.log("함수형 컴포넌트 mount 🧠");
  }, []);

  //unmount 시점=off일때 (리턴 +콜백 안에)  + mount 시점에 실행(return 위에)
  useEffect(() => {
    // return 위에는 mount 되었을 때임
    console.log("👾👾👾👾👾👾👾👾👾👾");
    return () => {
      console.log("함수형 컴포넌트 unmont 🙉");
    };
  }, []);

  //update 시점 + mount 시점에도
  useEffect(() => {
    //text, number 스테이트 바뀔때 모두 실행 됨 (더하기, input 어느 하나라도 변경 있을 때 )
    console.log("함수형 컴포넌트 update 될 때 마다 🤮");
  });

  // 특정(text) state 업데이트 + mount  /input에 변경 있을 때  ,[text]
  useEffect(() => {
    console.log("함수형 컴포넌트 update (text 변경시) 👁");
  }, [text]);

  return (
    <>
      <p>MyComponent : {number}</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>
    </>
  );
};

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h4>lifecycle 함수형</h4>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <MyComponent number={number} />}
      {/* visible 이 true면 MyComponent 보이고 아니면 숨김  number state를 porps로  */}
    </>
  );
};

export default LifeCycleFunc;
