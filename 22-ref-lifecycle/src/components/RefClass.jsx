import React from "react";
export class RefClass1 extends React.Component {
  handleFocus = () => {
    console.log(this.myInput);
    console.log(this.myInput.value);
    this.myInput.focus();
  };
  // 로그인시 유효성 검사 안했을 때 포커스 주는것 좋음

  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼 클릭시 input에 focus 처리</p>
        <p>ref 속성에 콜백 전달</p>
        <input
          type="text"
          ref={(ref) => {
            //this는 이클래스로 이름도 마음대로 정하고 ref
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
export class RefClass2 extends React.Component {
  //createRef() 를 사용해 ref 객체 사용 /이 방법은 함수형이랑 비슷
  //this.myInput.current 를 사용!
  myInput = React.createRef();
  handleFocus = () => {
    console.log(this.myInput.current);
    console.log(this.myInput.current.value);
    this.myInput.current.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼 클릭시 input에 focus 처리</p>
        <p>createRef()를 통해서 ref 객체 생성</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
