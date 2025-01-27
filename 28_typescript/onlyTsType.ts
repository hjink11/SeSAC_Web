//tuple: 배열의 개수와 데이터 타임 순서를 정하는 타입
let drink: [string, string]; //선언
drink = ["cola", "콜라"]; //대입

//선언 대입 한번에
let drink2: [string, string, number] = ["cola", "콜라", 12];

drink2[0] = "사이다"; // 사이다로 값 변경
console.log(drink2[0]);

//readoly 옵션 : 타입과 순서를 완벽히 고정
//추후 수정 불가능
let drink3: readonly [string, string] = ["cola", "콜라"];
// drink3[0] = "사이다" // 읽기전용이라 에러

// ------ enum

enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  choco, //0
  vanilla, //1
  strawberry, //2
  kiwi = "kiwi", // 권장하지 않음
}

console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.strawberry);

// 사용자 정의 타입

//1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "allie",
  isPassed: true,
};

console.log(student1);

type Score = "A+" | "A" | "B" | "C" | "D" | "F";

//interface도 상속 가능
interface 야구부 extends Student {
  //Student에서 상속받아온 정보
  // name: string;
  // isPassed: boolean;
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number; // 없어도 되는 값 ? 처리
  //추가로 넣어줄때
  [grade: number]: Score; //몇개가 들어오는지 모를때
}

const otani: 야구부 = {
  name: "otani",
  isPassed: true,
  weight: 95,
  height: 195,
  backNumber: 17, // 없어도 되는 값
  position: "pitcher",
  1: "A", //1학년때 성적은 A이다
  2: "C",
};

// console.log(otani);
console.log(otani[1]); // A

otani["1"] = "A+"; //성적 변경 (B+은 안됨 score에 없으니까 )
otani.position = "투수";
console.log(otani);
// otani.backNumber=11; // readonly 수정 불가

//함수만들기위한 타입선언
interface Calc {
  // ()밖에는 리턴값의 타입
  (a: number, b: number): number;
}
//함수
const sum: Calc = (num1: number, num2: number) => {
  return num1 + num2; // number 리턴
};

interface Toy {
  name: string;
  start(): void; // 함수 중 리턴타입이 없을 경우 void 타입
}

interface Car {
  name: string;
  color: string;
  price: number;
}

//객체 선언 (위에 인터페이스 둘 다 가지고)
//교차타입(&) > Toy와 Car 정보 모두를 만족해야 함
let toyCar: Toy & Car = {
  name: "타요",
  color: "blue",
  price: 50000,
  start() {
    //void니까 함수 라도 return 없이
    console.log(this.name, "의 가격은", this.price, "입니다");
  },
};

//함수 실행
toyCar.start();

//타입도 interface 처럼 사용
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: "Daniel",
  gender: "f",
  age: 21,
};

enum GenderEnum {
  FEMALE = "Female",
  MALE = "male",
}

type Gender = GenderEnum.MALE | GenderEnum.FEMALE;

//type Gender = "Female" | "Male"; // 타입으로 성별 정할때
type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: "Albert",
  like: ["car"],
  //gender: "Male", // m은 안됨 (type으로 정할때)
  gender: GenderEnum.MALE, // type enum으로 정할 때
};

console.log(albert.gender);
console.log(daniel.age);
