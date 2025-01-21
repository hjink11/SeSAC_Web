import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const params = useParams(); // {name:"anithing"}
  const [nameParmas] = useSearchParams();
  const nameQuery = nameParmas.get("name");
  console.log(nameQuery);

  const navigate = useNavigate();
  return (
    <main>
      <div>
        <p>학생 이름은 {params.name} 입니다.</p>
        {nameQuery && <p>실제 이름은 {nameQuery} 입니다.</p>}
      </div>
      <button onClick={() => navigate(-1)}>이전페이지로</button>
    </main>
  );
}
