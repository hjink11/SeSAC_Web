import className from "classnames";
import style from "../style/style.module.css";
import Names from "classnames/bind";

/*
module.css 적용은 해시가 적용되어 같은 이름 클래스라도 다 다르게 적용된다. ex) box1 sf-g0s9g
*/
export default function ModuleCSS() {
  const setting = Names.bind(style); // 문자열 "first"로 써도 style.first 이렇게 바꿔줌
  return (
    // 문자열이 아니라 "" style. 으로 style 이름은 마음대로
    <div className={style.container}>
      <h4>module.css 적용</h4>
      <div className={style.box2}>
        <div>안녕하세요!!!</div>
      </div>
      <br />
      {/* 두 개 클래스 연결 할 때 백틱으로 띄어쓰기줘서 아래처럼  */}
      <div className={`${style.first} ${style.second}`}>
        클래스 여러개 지정하는 방법1(템플릿 리터럴)
      </div>
      {/* " "은 띄어쓰기 / join은 배열을 문자열로
      [1,2,3,4,5].join("-")  >> "1-2-3-4-5"
      ["first", "secont"].join(" ") >> "first second"
      해시가 붙어서 실제 클래스 이름이 다름 
      */}
      <div className={[style.first, style.second].join(" ")}>
        클래스 여러개 지정하는 방법2(배열과 join)
      </div>
      <div className={className(style.first, style.second)}>
        클래스 여러개 지정하는 방법3(classnames 모듈 설치)
      </div>
      <div className={setting("first", "second")}>
        classnames 모듈 사용 더 해보기
      </div>
    </div>
  );
}
