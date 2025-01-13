import { useRef, useState } from "react";

export default function RefPrac1() {
  const [comment, setComment] = useState([
    { writer: "가", title: "화이팅!!" },
    { writer: "나", title: "집!!" },
    { writer: "다", title: "!!!!!가!!" },
  ]);

  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const addCommnet = () => {
    // 빈값이면 작성자에 포커스
    if (inputWriter === "" || inputTitle === "") {
      handleFocus();
    } else {
      let newComment = {
        writer: inputWriter,
        title: inputTitle,
      };

      setComment([...comment, newComment]);
      setInputTitle("");
      setInputWriter("");
    }
  };

  //ref 객체
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
    setInputTitle("");
    setInputWriter("");
  };
  const actEnter = (e) => {
    if (e.key === "Enter") {
      addCommnet();
    }
  };

  return (
    <>
      <h2>ref 실습 1</h2>
      <form>
        <label htmlFor="writer">작성자 : </label>
        <input
          type="text"
          name="writer"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          ref={inputRef}
        />
        {""} {""}
        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={actEnter}
        />
        {""} {""}
        <button type="button" onClick={addCommnet}>
          작성
        </button>{" "}
        {""}
      </form>
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
