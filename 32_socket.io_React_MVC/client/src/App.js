import "bootstrap/dist/css/bootstrap.css";
import Start from "./components/Start";
import Practice1 from "./components/Pactice1";
import Chatting from "./components/Chatting1";
import Chatting2 from "./components/Chatting2";
import Chatting3 from "./components/Chatting3";
function App() {
  return (
    <div className="App">
      <div>
        <h1>소켓으로 채팅만들기</h1>
        {/* <Start /> */}
        {/* <Practice1 /> */}
        {/* <Chatting /> */}
        {/* <Chatting2 /> */}
        <Chatting3 />
      </div>
    </div>
  );
}

export default App;
