import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Link to={"/test"} className="block">
        테스트~~~!!
      </Link>
      <Link to={"/test2"}>테스트2</Link>
    </>
  );
}
