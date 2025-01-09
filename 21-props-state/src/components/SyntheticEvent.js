export default function SyntheticEvent() {
  //e 는 이벤트 객체를 매개변수로
  function SyntheticEvent(e) {
    console.log(e);
    console.log("합성이벤트 클릭!");
  }

  function printInput(e) {
    console.log(e.target); // 이벤트 일어나는 것
    console.log(e.target.value); //이벤트의 값 input에 값
  }

  function callTest() {
    alert("안녕?");
  }

  return (
    <div>
      {/* 아래는 이벤트의 주소값을 전달? */}
      <button onClick={SyntheticEvent}>콘솔을 보세요</button>
      {/*  아래는 버튼 안눌러도 페이지 렌딩시 됨 */}
      {/* <button onClick={callTest()}>함수 호출해서 전달</button> */}

      <br />
      <input
        type="text"
        placeholder="글자를 입력하세요"
        onChange={(e) => {
          printInput(e);
        }}
      />
    </div>
  );
}
