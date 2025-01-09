import { useState } from "react";

export default function ChangeObj({ objArr }) {
  const [member, setMember] = useState(0);
  const btn = () => {
    setMember(member === objArr.length - 1 ? 0 : member + 1);
  };
  return (
    <div>
      <p>이름 : {objArr[member].name}</p>
      <p>나이 : {objArr[member].age}</p>
      <p>별명 : {objArr[member].nickName}</p>
      <button onClick={btn}>멤버 바꾸기</button>
    </div>
  );
}

// 이렇게 하는 방법도 ! % 사용!!!!
// // 현재 인덱스를 관리하는 상태
// const [currentIndex, setCurrentIndex] = useState(0);

// // 캐릭터 정보 보여주기
// const showNextCharacter = () => {
//   // 인덱스 증가, 마지막 캐릭터일 경우 다시 처음으로 순환
//   setCurrentIndex((prevIndex) => (prevIndex + 1) % objArr.length);
// };

// return (
//   <div>
//     <h2>캐릭터 정보</h2>
//     <p>이름: {objArr[currentIndex].name}</p>
//     <p>나이: {objArr[currentIndex].age}</p>
//     <p>별명: {objArr[currentIndex].nickName}</p>
//     <button onClick={showNextCharacter}>다음 캐릭터 보기</button>
//   </div>
// );
