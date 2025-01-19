import { Link } from "react-router-dom";

export default function Header() {
  // 이상한 경로로 들어가도 나옴
  return (
    <header className="Header">
      <span>logo</span>
      <div>
        <Link to={"/"} className="menu-item">
          홈으로
        </Link>
        <Link to={"/test"} className="menu-item">
          테스트
        </Link>
        <Link to={"/products"} className="menu-item">
          Product
        </Link>
      </div>
    </header>
  );
}
