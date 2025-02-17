import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import test2inter from "../types/test2Interface";
import Accordion1 from "./Accordion1";

// accordion id 부분전에는 다 열린다.(근데 사용하려면 구분하는 id 데이터 필요 1,2,3,)
// 글 번호?

export default function Test2() {
  const navigate = useNavigate();
  const [text, setText] = useState<test2inter[]>([]);
  //열고 닫고

  const getData = async () => {
    const resData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // console.log(resData);
    // userId, id, title, body
    setText(resData.data.slice(0, 10));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button className="block" onClick={() => navigate(-1)}>
        뒤로가기
      </button>
      <button onClick={() => navigate("/")}>메인</button>
      {text.map((data) => {
        return <Accordion1 data={data} key={data.id} />;
      })}
    </>
  );
}
