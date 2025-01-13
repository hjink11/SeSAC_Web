export default function BasicCSS() {
  const childDiv = {
    backgroundColor: "pink",
    width: "100px",
    height: "100px",
    textAligin: "center",
    lineHeight: "100px",
  };

  return (
    <>
      <h3>style 적용방법</h3>
      <ol>
        <li>인라인 스타일</li>
        <li>css 파일 만들어서 import</li>
        <li>.module.css 파일 만들어서 import</li>
        <li>styled-components 라이브러리 사용 (설치)</li>
        <li>SASS 사용(설치)</li>
      </ol>

      <h4 style={{ color: "#888" }}>인라인 스타일 적용</h4>
      <div style={{ backgroundColor: "#ddd" }}>
        <div style={childDiv}>안녕하세요!</div>
      </div>
      <h4>css 파일로 적용</h4>
      {/* App.jsx에서 스타일 import */}
      <div className="box1">
        <div>안녕하세요???</div>
      </div>
    </>
  );
}
