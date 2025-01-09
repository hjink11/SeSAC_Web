import { Component } from "react";

export default class ClassState extends Component {
  // 스테이트 선언 render 위에서
  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        <p>{banana}</p>
        <button
          onClick={() => {
            this.setState({ banana: "banana" });
          }}
        >
          영어로 변경!(class 형)
        </button>
      </div>
    );
  }
}
