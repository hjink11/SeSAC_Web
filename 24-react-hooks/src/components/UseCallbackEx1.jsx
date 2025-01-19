import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  //랜더링할때마다 함수 주소가 바뀐다. 그래서 함수 자체를 메모리에 저장해야 함
  const func1 = () => {
    console.log("number:" + number);
  };

  //()=>{} 을 저장하는 것임 Memo는 return 값
  // [number]을 적지 않으면 처음 랜더링 했을때만 저장되고 있고 넘버가 안나옴
  const func2 = useCallback(() => {
    console.log(`number: ${number} 🛎`);
  }, [number]);

  useEffect(() => {
    console.log("함수1 변경");
  }, [func1]);

  useEffect(() => {
    console.log("함수2 변경");
  }, [func2]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        call funtion
      </button>
      <button
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        {isTrue.toString()}
      </button>
    </div>
  );
}
