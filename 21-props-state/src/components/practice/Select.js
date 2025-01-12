export default function Select({ setData }) {
  /**
 * 기존 state
 * {
    fruit: "apple",
    background: "white",
    color: "black",
    content: "text",
  }
 */

  return (
    <div>
      {/* select 3개 */}
      과일 :
      <select
        onChange={(e) => {
          // console.log("t", e.target);
          // console.log(e.currentTarget);
          // console.log(e.target.value);
          setData((preveState) => {
            // 배경색, 글자색, 콘텐츠는 그대로 두고 선택된 과일(e)로 바꿈
            return { ...preveState, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          setData((preveState) => {
            // 선택된 배경색만(e) 상태를 바꿔 반환
            return { ...preveState, background: e.target.value };
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨간생</option>
        <option value="yellow">노랑색</option>
        <option value="palegreen">페일그륀~</option>
        <option value="blue">파란색</option>
        <option value="purple">보라색</option>
        <option value="pink">분홍색</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          const color = e.target.value;
          setData((prevData) => {
            return { ...prevData, color };
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨간색</option>
        <option value="yellow">노랑색</option>
        <option value="green">초록색</option>
        <option value="blue">파란색</option>
        <option value="purple">보라색</option>
        <option value="pink">분홍색</option>
      </select>
    </div>
  );
}
