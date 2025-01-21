import { useState } from "react";
import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import { AgeContext } from "./context/AgeContext";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <>
      {/*  더 상위에서 사용 가능하게 만드는법 이건 이전 */}
      {/* Theme은 context BOX는 컴포넌트 */}
      <ThemeContext.Provider value={"dark"}>
        <Box />
      </ThemeContext.Provider>

      <UserContext.Provider value={{ name, setName }}>
        {/* age, setAge 가 위에 있는걸 context로 넘겨주는 거임 */}
        <AgeContext.Provider value={{ age, setAge }}>
          <Profile />
        </AgeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
