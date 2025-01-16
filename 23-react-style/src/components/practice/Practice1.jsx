import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";
const AppDiv = styled.div`
  text-align: center;
`;
const AHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const LogoAni = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ALogo = styled.img`
  animation: ${LogoAni} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const ALink = styled.a`
  color: #61dafb;
`;

export default function Practice() {
  return (
    <AppDiv>
      <AHeader>
        <ALogo src={logo} alt="logo" />{" "}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ALink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </ALink>
      </AHeader>
    </AppDiv>
  );
}
