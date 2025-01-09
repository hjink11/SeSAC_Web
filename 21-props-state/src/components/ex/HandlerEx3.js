import { useState } from "react";

export default function HandlerEx3() {
  //   const [dis, setDis] = useState("block");
  const [show, setShow] = useState(true);
  const btn = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={btn}>{show ? "사라져라" : "보여라"}</button>
      <p>{show ? "안녕하세요" : ""}</p>
    </div>
  );
}
