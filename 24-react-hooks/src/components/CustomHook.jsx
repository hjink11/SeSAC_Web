import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  //isOpen 처음은 false임 (기본값이)
  // 커스텀 훅에서 return [value, toggleValue]; 을 하고 있는데
  // isOpen=value, setIsOpen = toogleValue <=value에 값을 바꾸는 함수)
  const [isOpen, setIsOpen] = useToggle();
  return (
    <>
      <h3>custom hook 사용해보기</h3>
      {/* setIsOpen자체가 반대로 만들어 주는 함수니까 바로 넣어줌 
      false에서 span 안보이고 true일때 보임 처음 페이지 랜더링 = false(기본값) 클릭시 true */}
      <div onClick={setIsOpen}>
        Q. 리액트에서 custom hook을 만들 수 있나요?
        {isOpen && <span> A. 네! 사용할 수 있습니다!!</span>}
      </div>
    </>
  );
}
