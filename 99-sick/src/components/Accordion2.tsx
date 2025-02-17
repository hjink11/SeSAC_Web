// import React, { useCallback, useRef, useState } from "react";
import React from "react";
// import "../style/accodion.scss";
import test2inter from "../types/test2Interface";

// axios로 받은 props interface data를 잘 봐!
interface Props {
  data: test2inter;
  isOpen: boolean; // 현재 열려있는지
  onClick: () => void; // 클릭시 실행할 함수
}
//Accordion(props: Props) 이였음
export default function Accordion({ data, isOpen, onClick }: Props) {
  // porps로 받은 데이터
  // const { id, title, body } = props.data;

  // ref 지정
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (parentRef.current && childRef.current) {
      if (isOpen) {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "#FFFBEB";
      } else {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      }
    }
  }, [isOpen]);

  return (
    <>
      <section
        className="flex flex-col relative justify-center 
       border border-gray-400 w-3/5"
      >
        <header
          className="flex items-center h-9 cursor-pointer relative 
          overflow-hidden justify-items-center"
          onClick={onClick} // 클릭 시 부모로 이벤트 전달
        >
          <div className="flex justify-between w-full text-sm">
            <p className="w-24 text-center">2025-2-16</p>
            <p className="overflow-hidden overflow-ellipsis whitespace-nowrap w-2/5">
              {data.body.slice(0, 30)}...
            </p>
            {/* 사이즈 변화시 오버플로에 따라 ... 하기 두줄이 되지 않게 webkit */}
            <p className="w-20 text-center">{data.id}</p>
          </div>
        </header>
        <div
          className="contentWrapper h-0 w-full overflow-hidden "
          ref={parentRef}
        >
          <div className="py-1 px-2" ref={childRef}>
            <div className="reviewImg w-full my-3 flex justify-center">
              <img
                className="w-3/5 h-1/3"
                src="/assets/img/reviewT.jpg"
                alt="review-image"
              />
            </div>
            <p className="m-3 text-center h-1/3 text-base">{data.body}</p>

            {/* 댓글 */}
            <div className="reBox w-full h-36 relative">
              <textarea
                placeholder="댓글 내용을 입력해주세요.(공백 포함 200자 이내 작성)"
                maxLength={200}
                className="resize-none border block w-full h-1/2 p-2 
                rounded text-sm"
              ></textarea>
              <button
                className="border rounded m-2 w-12 h-7 text-sm
               bg-white absolute right-1"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
