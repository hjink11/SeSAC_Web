import { useState } from "react";

// (initialState)은 값이 전달 안됐을 때 기본값 false
export default function useToggle(initialState = false) {
  //토글은 다크변환이나 전환하는 것에 사용

  //value는 토클의 상태
  const [value, setValue] = useState(initialState);

  //value 를 반값으로 전환시키는 함수
  const toggleValue = () => setValue(!value);

  //현재 value 값과 , 반대전환함수!를 배열에 담아서 리턴 stata 선언과 같음
  return [value, toggleValue];
}
