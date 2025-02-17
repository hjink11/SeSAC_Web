import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import test2inter from "../types/test2Interface";
import Accordion from "./Accordion";
import "../style/accodion.scss";

export default function Test2() {
  const navigate = useNavigate();
  const [text, setText] = useState<test2inter[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1); //!!!
  const itemsPerPage = 10; ///!!!!!!

  const getData = async () => {
    const resData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setText(resData.data.slice(0, 30));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const indexOfLastItem = currentPage * itemsPerPage; //imesPr..=10 각 페이지의 마지막 아이템
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //각페이지의 첫번째 아이템
  const currentItems = text.slice(indexOfFirstItem, indexOfLastItem); //현재페이지아이템들 (처음과마지막마이템만큼 자른)
  const totalPages = Math.ceil(text.length / itemsPerPage); //text=axios로 부른 데이터 15/10 = 1.5 천장 함수 =2

  return (
    <>
      <div className="con m-10 flex flex-col items-center">
        <div className="title flex border h-10 relative items-center border-amber-500 bg-amber-500 text-white w-3/5">
          <div className="flex justify-between justify-items-center w-full">
            <p className="w-24 text-center">작성일</p>
            <p className="">제목</p>
            <p className="w-20 text-center">작성자</p>
          </div>
        </div>
        {currentItems.map((data) => (
          <Accordion
            data={data}
            key={data.id}
            isOpen={openId === data.id}
            onClick={() => handleClick(data.id)}
          />
        ))}

        {/* 페이지네이션 */}
        <div className="pagination flex mt-4">
          <button
            className="px-4 py-2 mx-1 text-xs "
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            이전
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={` px-3 py-2 mx-1 text-xs ${
                currentPage === index + 1 &&
                "border border-amber-500 text-amber-500"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className=" px-4 py-2 mx-1 text-xs"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      </div>
    </>
  );
}
