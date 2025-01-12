export default function Input({ setData }) {
  //console.log(setData);
  // 이벤트 객체를 가져와서 변경해야 한다. ()에 e
  const handleChange = (evt) => {
    // {
    //     fruit: "apple",
    //     background: "white",
    //     color: "black",
    //     content: "text",
    //   }
    //  바뀌지 않는 이전 상태를 다 유지 해야 한다.(전개 연산자로 다 불러옴 ... 바꿔주는 부분만 덮어 씌움)

    // console.log("target", evt.target);  // 여기서는 둘다 input
    // console.log(evt.currentTarget);

    setData((prevState) => {
      return { ...prevState, content: evt.target.value }; // input 의 값을 가져와 content 내용을 바꿈
    });
  };
  return (
    <div>
      내용:{" "}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
