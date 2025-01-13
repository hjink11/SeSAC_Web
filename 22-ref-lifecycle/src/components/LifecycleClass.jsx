import { Component } from "react";

class MyComponent extends Component {
  //   마운트 되었을 때 동작  //처음 랜더링 다시 on 버튼 눌렀을 때
  componentDidMount() {
    console.log("클래스형 mount 🧠");
  }
  //업데이트 됐을때 동작  (rerendering)
  componentDidUpdate() {
    console.log("클래스형 update 🙉");
  }
  //언마운트 되기 직전에 동작 (MyComponen 삭제(안보임))
  componentWillUnmount() {
    console.log("클래스형 unmount 🤢 ");
  }
  render() {
    return <p>MyComponent {this.props.number}</p>; //여기 수정
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {/* visible true 일때 보이고 아니면 unmount */}
        {/* 
        visible state 값에 따라서 MyComponent 가 생성 및 제거
        */}
        {this.state.visible && <MyComponent number={this.state.number} />}
        {/*  위에도  */}
      </>
    );
  }
}

export default LifeCycleClass;
