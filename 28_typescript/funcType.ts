// 리턴타입 없는 함수 void  (test.js에서 자바스크립트과 비교)
function jsPrint(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

jsPrint(1, 2, 3);
console.log("----------");
jsPrint(1, 2);
//   jsPrint(1,2,3,4) //에러

//함수의 리턴타입이 추론이 되서 (c=5)
function tsPrint2(a: number, b: number, c = 5) {
  console.log("print2");
  console.log(a);
  console.log(b);
  console.log(c);
}

tsPrint2(1, 2, 3);
tsPrint2(1, 2); //1 2 5 가 나옴

function concatStr(a: string, b: number): string {
  return a + b; // 문자열과 숫자 더하기 문자열이 되서 이어져 나옴
}

function circleArea(r: number): number {
  return r * r * Math.PI;
}

// 함수 표현식
const squareArea = (a: number, b: number): number => {
  return a * b;
};

//return 키원드 없는 리턴
const triangleArea = (w: string, h: string): number =>
  (Number(w) * Number(h)) / 2;

// 함수 호출
console.log("원의 넓이", circleArea(5));
console.log("사각형의 넓이" + squareArea(3, 4));
console.log(`삼각형 넓이 ${triangleArea("5", "6")}`);

function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

// goingOn();  // 함수 실행시키면 계속 실행 never

//------- 오버로딩 (typescript에서 생김) (오버라이딩은 클래스에서 로딩은 함수 선언시)
// - 함수에서 매개변수의 개수, 타입/반환 타입이 다를 때
// - 같은 함수의 이름으로 매개변수의 종류와 개수를 다르게 선언 가능
// 비슷한 기능일 때문 사용 가능

// 함수 타입 지정
function add(x: string, y: string): string;
function add(x: number, y: number): number;

//오버로딩 함수 구현  any는 웬만하면 사용 x 타입 쓰는 이유 없어져???
function add(x: any, y: any) {
  return x + y;
}

console.log(add(1, 2)); // 숫자형은 3
console.log(add("1", "2")); // 문자열은 12 붙여서
// console.log(add("1",2) ) // 호출 불가능 (숫자수자, 문자열문자열 만 타입이 지정되 있으니)
