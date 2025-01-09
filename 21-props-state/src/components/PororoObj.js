import ChangeObj from "./ChangeObj";
export default function PororoObj() {
  // 뽀로로가 changeObj 한테 props 하는것 => 뽀로로가 상위, 체인지가 하위라는 것! 상위를 App.js에 쓴다.
  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "7",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "5",
      nickName: "공주님",
    },
    {
      name: "크롱",
      age: "4",
      nickName: "장난꾸러기",
    },
  ];
  return (
    <div>
      {" "}
      <ChangeObj objArr={pororoObjArr} />{" "}
    </div>
  );
}
