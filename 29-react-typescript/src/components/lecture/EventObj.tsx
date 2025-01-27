import React from "react";

export default function EventObj() {
  // 이벤트를 아래처럼 함수로 따로 만들때는 인자로 받는 이벤트도 타입을 작성해줘여 한다.
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    //element는 이벤트걸린 div
    console.log(e);
    console.log(e.target); // 마우스 이벤트에는 value x
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
    console.log(event.target.value);
  }
  function handleKeyDown(a: React.KeyboardEvent<HTMLInputElement>) {
    console.log(a.key); //a
    console.log(a.code); // key a
    // console.log(a.key.Code)
  }

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {/* ! 위에 처럼 이벤트를 함수로 따로 만들지 않고 
      onclick 내에서 이벤트 전달받을떄는 이벤트 타입 작성하지 않아도 됨 */}
      <div onClick={(e) => console.log(e)}>onClick</div>
      <div onClick={handleClick}>onClick</div>
      <div>
        <span>onChange</span>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <span>onKeyDown</span>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
      <div onDrag={handleClick}>onDrag</div>
    </div>
  );
}
