interface Props {
  name: string; // props가 들어오는지 안 들어오는지 모를 때는 ?:
}

// Props의 이름은 자기 맘
export function PropsType1({ name }: Props) {
  //필요한 속성만 명시적으로 가져옴
  return (
    <>
      <h2>hello {name}</h2>
    </>
  );
}

interface Square {
  [key: string]: string; // props로 들어오는 객체 키와 값의 타입을 지정하는 것
}
export function PropsType2(props: Square) {
  //객체 전체를 전달받아 사용
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };

  return <div style={divStyle}></div>;
}

interface Square2 {
  width: string;
  height: string;
  color?: string;
  text: string;
}

export function PropsType3(props: Square2) {
  const { width, height, color, text } = props;

  const divStyle = {
    width: `${width}`,
    height: `${height}`,
    // ? 처리된 속성에 대해 예외처리 반드시 해주어야 함
    backgroundColor: `${color ? color : "pink"}`,
    lineHeight: `${height}`,
    // textAlign: "center",
  };

  return <div style={divStyle}>{text}</div>;
}
