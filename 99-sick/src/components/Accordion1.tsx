// import React, { useCallback, useRef, useState } from "react";
import React from "react";
import "../style/accodion.scss";
import test2inter from "../types/test2Interface";

// axios로 받은 props interface data를 잘 봐!
interface Props {
  data: test2inter;
}
//Accordion(props: Props) 이였음
export default function Accordion(props: Props) {
  // porps로 받은 데이터 구조분해 할당
  const { id, title, body } = props.data;

  // ref 지정
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);

  // state 콘텐트 영역 계산하고 그 콘텐츠 높이만큼 영역 주기 위한 핸들러도
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handlerButtonClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      // e.preventDefault는 고유 동작을 중단시키고,
      // e.stopPropagation 는 상위 엘리먼트들로의 이벤트 전파를 중단
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "#FFFBEB";
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? "열기" : "닫기";

  return (
    <>
      <section
        className="flex flex-col relative justify-center 
      rounded border border-gray-400"
      >
        <header
          className="flex items-center h-8 my-0 mr-8 ml-2"
          onClick={handlerButtonClick}
        >
          <p>{body.slice(0, 30)}...</p>
          <button className="top-2 right-5 text-sm absolute">
            {buttonText}
          </button>
        </header>
        <div
          className="contentWrapper h-0 w-full overflow-hidden"
          ref={parentRef}
        >
          <div className="py-1 px-2" ref={childRef}>
            <p>{body}</p>
          </div>
        </div>
      </section>
    </>
  );
}
