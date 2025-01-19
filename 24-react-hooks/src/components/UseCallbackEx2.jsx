import { useCallback, useState } from "react";

export default function UseCallbackEx2() {
  const [text, setText] = useState("");

  // 렌더링 될 때마다 다시 메모리에 저장 되고 있음 (함수는그럼)
  // 이정도는 괜찮지만 []값이 들어가는 경우에는 callback 사용
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  //useCallback 사용 렌더링 됐을 때([]) 한번 저장해서 사용
  //첫번째 렌더링 되었을 때만 메모리에 저장 (리렌더링 될때마다(input변경시) 메모리에서 가져와 사용)
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>작성한 값 :{text} </p>
    </div>
  );
}
