import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useSearchParams();
  console.log(searchQuery.get("mode")); //Dark, null

  return (
    // <main className={["MainPage", searchQuery.get("mode")].join("")}>
    <main className={`MainPage ${searchQuery.get("mode")}`}>
      <p>여기는 홈입니다🖼</p>
      <button onClick={() => setSearchQuery({ mode: "Dark" })}>Darkmode</button>
    </main>
  );
}
