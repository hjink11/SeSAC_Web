import { SetStateAction } from "react";
import styled from "styled-components";

const MHeader = styled.header`
  background-color: #aff2ee;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

interface TextProps {
  txtColor: boolean;
}
const Div = styled.div<TextProps>`
  width: 30%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #05ce41;
  }
  // props로 받은 지역state가 true일때 red로
  color: ${(props: TextProps) => (props.txtColor ? "red" : "black")};
`;
interface Props {
  mapo: boolean;
  gangdong: boolean;
  dobong: boolean;
  setMapo: (isShow: boolean) => void; //밑에와 같은 역할
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
}
export default function Header(props: Props) {
  const { mapo, gangdong, dobong, setDobong, setGangdong, setMapo } = props;

  // func: 타입 위에 React.Dispatch ~ 사용해도된다.
  const setState = (func: (isShow: boolean) => void): void => {
    setDobong(false);
    setGangdong(false);
    setMapo(false);
    func(true); // 매개변수(func)로 들어온 set지역을 true로 변경하는 것임
  };

  return (
    <MHeader>
      <Div onClick={() => setState(setGangdong)} txtColor={gangdong}>
        강동구
      </Div>
      <Div onClick={() => setState(setMapo)} txtColor={mapo}>
        마포구
      </Div>
      <Div onClick={() => setState(setDobong)} txtColor={dobong}>
        도봉구
      </Div>
    </MHeader>
  );
}
