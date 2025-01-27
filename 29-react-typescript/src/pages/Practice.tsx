import { Link } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";

export default function Practice() {
  return (
    <main>
      <HeaderMenu />
      <h2>Practice에 오신것을 환영 </h2>
      <div>
        <Link to="/practice/codingon" style={{ marginRight: "10px" }}>
          코딩온실습문제
        </Link>
      </div>
    </main>
  );
}
