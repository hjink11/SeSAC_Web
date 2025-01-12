import { useState } from "react";

export default function MapPrac2() {
  const [comment, setComment] = useState([
    { writer: "가", title: "화이팅!!" },
    { writer: "나", title: "집!!" },
    { writer: "다", title: "!!!!!가!!" },
  ]);

  const [inputWriter, setInputWriter] = useState(""); //작성자 등록
  const [inputTitle, setInputTitle] = useState(""); //제목
  const [inputSearch, setInputSearch] = useState(""); //검색어

  const [result, setResult] = useState([]); //검색결과에 대한 배열
  const [searchType, setSearchType] = useState("writer"); // 검색 select 부분 상태

  const addCommnet = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    //이전 코멘트 펼쳐짐
    setComment([...comment, newComment]);
    setInputTitle(""); // input 초기화 (input창 빈칸으로 )
    setInputWriter("");
    /*
    [...comment] == {
    { writer: "가", title: "화이팅!!" },
    { writer: "나", title: "집!!" },
    { writer: "다", title: "!!!!!가!!" },}  와 같은 것 거기에 새로운것 추가 
    */
  };

  //검색을 실행하는 함수
  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      //console.log("아이", item); // comment 배열 요소들
      //console.log(item.title);  //이렇게는 안됨
      console.log("타입", item[searchType]);
      console.log("검색어 검사", item[searchType].includes(inputSearch));
      //includes는 있으면 ture 없으면 false/ inputSearch는 검색어

      if (!item[searchType].includes(inputSearch)) {
        //검색어가 없는 요소는 null
        return null;
      }

      return item; //객체 자체를 리턴
    });
    console.log(searchResult); // 검색된 결과 배열
    setResult(searchResult); //검색어 결과 설정
    setInputSearch("");
  };
  //search 타입에 따라 어떤 검색 할지
  const selectSeachType = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div>
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
        />
        {""} {""}
        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        {""} {""}
        <button type="button" onClick={addCommnet}>
          작성
        </button>{" "}
        {""}
      </form>

      {/* 검색 폼  */}
      <form>
        <select name="type" onChange={selectSeachType}>
          <option value={"writer"}>작성자</option>
          <option value={"title"}>제목</option>
        </select>
        <input
          type="text"
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          name="search"
          placeholder="검색어를 입력"
          value={inputSearch}
        ></input>
        <button type="button" onClick={searchComment}>
          검색
        </button>
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

      <h4>검색결과</h4>
      {result.length == 0 ? (
        <h3>검색결과가 없어요!😢</h3>
      ) : (
        <table border={1} style={{ width: "500px", margin: "0 auto" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
