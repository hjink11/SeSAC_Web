import { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    word: "Hello World!",
  };

  render() {
    const { word } = this.state;
    return (
      <div>
        <h3>{word}</h3>
        <button
          onClick={() => {
            this.setState({ word: "Goodbye World!" });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}
