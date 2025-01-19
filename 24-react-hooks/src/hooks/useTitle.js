import { useEffect } from "react";

export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title; // index.html
    console.log(prevTitle); // 원래 타이틀
    document.title = title; //실제로 변경

    // unmount 시
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
