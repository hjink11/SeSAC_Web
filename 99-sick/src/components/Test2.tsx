import { useNavigate } from "react-router-dom";

export default function Test2() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>메인</button>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
      <p>Text22</p>
    </>
  );
}
