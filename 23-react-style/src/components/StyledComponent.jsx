import styled, { keyframes } from "styled-components";

//스타일을 컴포넌트를 만들어  div에 주는것
const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0;
`;

const H4Title = styled.h4`
  background-color: yellowgreen;
  /* 반응형 설정하기 */
  /* 세로방향 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: green;
  }
  /* 가로 넓이에 따라  */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: red;
  }
`;

const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;

//keyframes 는 import 해야함 !!!!!
//변수를 이용해 사용하고 있다. %
const rotate = keyframes`
    0%{
        transform:rotate(0);
    }
    50%{
        transform:rotate(180deg);
        background-color: aliceblue;
    }
    100%{
        transform:rotate(360deg);
    }
`;

//props, hover, animation   백틱 안이라 ${}에 변수 사용
const Child = styled.span`
  color: red;

  &:hover {
    cursor: pointer;
    /* color: wheat; */
    color: ${(props) => (props.color ? props.color : "wheat")};
    background-color: ${(props) => (props.bg ? props.bg : "yellow")};
    /* animation */
    animation: ${rotate} 1s linear infinite;
  }
`;

export default function StyledComponent() {
  return (
    <StyledContainer>
      <H4Title>Styled Components 이용</H4Title>
      <ParentDiv>
        <Child>element1</Child>
        <Child color="blue" bg="skyblue">
          element2
        </Child>
        <Child>element3</Child>
      </ParentDiv>
    </StyledContainer>
  );
}
