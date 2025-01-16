import { useEffect, useMemo, useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [iskorea, setIsKorea] = useState(true);

  //   const location = {
  //     country: iskorea ? "korea" : "abroad",
  //   };

  //useMemo 사용
  const location = useMemo(() => {
    return { country: iskorea ? "korea" : "abroad" };
  }, [iskorea]);

  useEffect(() => {
    console.log("location이 변경될 때마다 실행됩니다. ");
  }, [location]);

  return (
    <>
      <div style={{ border: "1px solid blue" }}>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <p>나라 : {location.country}</p>
        <button onClick={() => setIsKorea(!iskorea)}>나라변경</button>
      </div>
    </>
  );
}
