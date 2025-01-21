import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Box() {
  const themeContext = useContext(ThemeContext); //여러개가 올 수 있기 때문에 인자 명시,import
  console.log(themeContext); //dark

  return (
    <div>
      <h3>ThemeContext 사용하기</h3>
      Theme: {themeContext}
    </div>
  );
}
