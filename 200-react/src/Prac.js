export default function Prac() {
  const name = "반야";
  const animal = "강아지";
  const a = 5;
  const b = 3;

  return (
    <div>
      <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
        <br />
        <u>{name}</u>는 <u>{animal}입니다. </u>
      </h2>
      <p>{a + b === 8 ? "정답입니다!" : "오답입니다!"}</p>
      <p>{a > b && "a가 b보다 큽니다."}</p>
    </div>
  );
}
