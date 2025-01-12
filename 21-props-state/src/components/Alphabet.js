import { useState } from "react";

export default function Alphabet() {
  //state
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);

  //state
  const [input, setInput] = useState("");
  //console.log([1, 2, 3, 4].concat(10));

  //버튼에 onClick , activeEnter 이벤트에서 함수 (리스트에 추가)
  const addAlpha = () => {
    const newList = list.concat({
      // 0일 때는 1 아니면 마지막 id +1
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alpha: input,
    });
    setList(newList);
    setInput("");
  };
  //input 태그에 대고 엔터 눌렀을 때 등록이 되도록
  const activeEnter = (e) => {
    console.log(e.key); // 키보드 정보
    if (e.key === "Enter") {
      addAlpha(); //위에서 만든 함수
    }
  };

  //삭제 filter 사용 조건에 맞는 요소만 찾아서 반환 여기서는 더블 클릭하면 그것이 선택 되지만 !==  로 그 반대로 불러옴
  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => {
      // filter에 인자로 들어오는 것은 현재 list 배열임
      return alpha.id !== id; // 그 요소.id 가 아닌 것만(삭제되지 않는 것만 ) return 한다.
    });
    setList(newAlpha);
  };
  //   const newArr = [1, 2, 3, 4, 5].filter((el) => {
  //     return el > 3;
  //   });
  //   console.log(newArr);

  return (
    <div>
      <h2> Alphabet</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {list.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
