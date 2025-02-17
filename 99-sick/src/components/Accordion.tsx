// import React, { useCallback, useRef, useState } from "react";
import React, { useRef, useState } from "react";
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

  // 리플 달기
  const [newRe, setNewRe] = useState<string>(""); // 리플글
  const reRef = useRef<HTMLTextAreaElement>(null); //텍박 접근
  const [reMode, setReMode] = useState(false); //리플 모드

  const addRe = () => {
    // 등록 버튼
    // db에할때 create와 update 구분하는 코드 있어서 update 까지 가능하게 만들기
    if (newRe.trim() !== "") {
      setReMode(true);
      if (parentRef.current && childRef.current) {
        if (isOpen) {
          parentRef.current.style.height = `${
            childRef.current.clientHeight + 100
          }px`;
        }
      }
    } else {
      alert("댓글을 입력해주세요");
    }
  };

  //엔터
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      //nativeEvent은 맥에서 한글오류방지
      addRe();
    }
  };

  //수정 버튼
  const updateRe = () => {
    if (reRef.current) reRef.current.value = newRe;
    setReMode(false);
  };

  // ref 지정
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (parentRef.current && childRef.current) {
      if (isOpen) {
        parentRef.current.style.height = `${
          childRef.current.clientHeight + 60
        }px`;
        parentRef.current.style.background = "#FFFBEB";
      } else {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      }
    }
  }, [isOpen]);

  //검사

  return (
    <>
      <section
        className="flex flex-col relative justify-center 
       border-b border-gray-300 w-3/5"
      >
        <header
          className="flex items-center h-9 cursor-pointer relative 
          overflow-hidden justify-items-center"
          onClick={onClick} // 클릭 시 부모로 이벤트 전달
        >
          <div className="flex justify-between w-full text-sm">
            <p className="w-24 text-center">2025-2-16</p>
            <p className="overflow-hidden overflow-ellipsis whitespace-nowrap w-2/5">
              {data.body.slice(0, 40)}...
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
              {reMode ? (
                <div className="newReBox border-t">
                  <p className="text-sm mt-2 text-center"> 점주 </p>
                  <p className="text-base text-center w-full h-1/2">{newRe}</p>
                  <button
                    className="border rounded m-2 w-12 h-7 text-sm
                 bg-white absolute right-1"
                    onClick={updateRe}
                  >
                    수정
                  </button>
                </div>
              ) : (
                <>
                  <textarea
                    placeholder="댓글 내용을 입력해주세요.(공백 포함 200자 이내 작성)"
                    maxLength={200}
                    className="resize-none border block w-full h-1/2 p-2 
                  rounded text-sm"
                    value={newRe}
                    onChange={(e) => setNewRe(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={reRef}
                  ></textarea>
                  <button
                    className="border rounded m-2 w-12 h-7 text-sm
                 bg-white absolute right-1"
                    onClick={addRe}
                  >
                    등록
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
