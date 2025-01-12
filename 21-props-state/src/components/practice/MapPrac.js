import { useState } from "react";

export default function MapPrac() {
  const [list, setList] = useState([
    { name: "코디", email: "codi@gmail.com" },
    { name: "김효진", email: "hjink@gmail.com" },
  ]);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const addList = () => {
    const newList = list.concat({
      name: input1,
      email: input2,
    });
    setList(newList);
    setInput1("");
    setInput2("");
  };

  //enter
  const actEnter = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };

  //삭제
  const deleteList = (name) => {
    console.log(name);
    const newL = list.filter((dList) => {
      return dList.name !== name;
    });
    setList(newL);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={input1}
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={input2}
        onChange={(e) => {
          setInput2(e.target.value);
        }}
        onKeyDown={actEnter}
      />
      <button onClick={addList}>등록</button>
      <ul>
        {list.map((el, i) => {
          return (
            <li
              key={i}
              style={{
                listStyle: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              onDoubleClick={() => deleteList(el.name)}
            >
              {el.name} : {el.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
