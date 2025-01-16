import "../style/Sass.scss";
import img1 from "../assets/peach.jpg";

export default function Sass() {
  return (
    <>
      <h4>SASS 사용(.scss)</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>

      {/* mixin 사용 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>

      {/* image 불러오기 */}
      <h2>이미지 가져오기</h2>
      <h4>1. src 내부에서</h4>
      <h5>경로명으로 (상대경로)</h5>
      <img
        src="../assets/peach.jpg"
        alt="src 내부의 사진은 경로명으로 바로 접근 불가능 "
      />

      <h5>import 후 가져오기</h5>
      <img src={img1} alt="import로 가져오기 " style={{ width: "100px" }} />

      <h5>css에서 backgroung-image 속성으로 가져오기</h5>
      <div className="src-img img-test"></div>

      <h4>2. public 폴더 내부에서 </h4>
      <h5>img 태그에 경로명 넣기</h5>
      <img
        src="/img/peach.jpg"
        alt="public에서는 폴더 내부에서 경로명으로 접근 간능 단, /(루트)로 가능"
        style={{ width: "100px" }}
      />

      <img
        src={process.env.PUBLIC_URL + "/img/peach.jpg"}
        alt="조금 더 안전한 방법 "
        style={{ width: "100px" }}
      />

      <h5>css에서 backgroung-image 속성으로 접근 </h5>
      <div className="public-img img-test"></div>

      <h4>실습문제</h4>
      <div className="practice">
        <div className="imgg"></div>
        <div className="imgg"></div>
        <div className="imgg"></div>
        <div className="imgg"></div>
      </div>
    </>
  );
}
