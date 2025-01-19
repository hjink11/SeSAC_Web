import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const navi = useNavigate();
  const params = useParams();
  console.log("params", params);
  //{Sname: 'sean'}
  const { Sname } = useParams();

  const [getQuery, setGetQuery] = useSearchParams();
  console.log(getQuery.get("name"));

  return (
    <>
      <div className="con1">
        <h4>
          학생의 이름은 <span>{Sname}</span> 입니다.
        </h4>
        <br />
        {Sname === "new" && (
          <p>
            실제 이름은 <span>{getQuery.get("name")}</span>
          </p>
        )}
        <button onClick={() => navi(-1)}>이전페이지로</button>
      </div>
    </>
  );
}
