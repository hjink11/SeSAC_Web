console.log("conected");
/**
 * 1.if
 * if(조건식){
 *  조건식이 참일때 실행되는 문장
 * }
 */

if (5 > 3) {
  console.log("조건이 참입니다.");
}

//let number = Number(prompt('숫자를 입력해주세요'))
let number = 100;

if (number > 10) {
  console.log("입력받은 수가 10보다 큽니다.");
} else {
  console.log("입력받은 수가 10과 같거나 작습니다.");
}

/*   아래에서 number 사용해서 
if(number>10){
    console.log('입력받은 수가 10보다 큼')
}else if(number===10){
     console.log('입력받은 수가 10입니다.')
}else{
    console.log('입력받은 수가 10보다 작습니다.')
}   */

/*90점 이상은 A 80점 이상은 B 70점은 C 아래는 모두 F */
if (number > 90 && number <= 100) {
  console.log("A");
} else if (number >= 80) {
  //위에서 큰 숫자 걸러서 조건이 간단
  console.log("B");
} else if (number >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// 중첩 IF문
let userId = "user01"; //기본적으로 저장된 id
let userPw = "1234qwer";

function loginUser() {
  let promptId = prompt("아이디를 입력해주세요");
  let promptPW = prompt("비밀번호를 입력해주세요");

  if (userId === promptId) {
    if (userPw === promptPW) {
      console.log("로그인 성공");
      alert("안녕하세요.." + userId + "님!!!"); //` 로 하면? (`안녕하세요.. ${userId}님 `)
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  } else if (promptId === "") {
    alert("아이디를 입력하지 않았습니다!!!");
  } else {
    alert("아이디가 틀렸어요..");
  }
}

// loginUser() 위에있는거 이걸로 출력

/** switch 문  */
//let a = Number(prompt('숫자를 입력해주세요'))
let a = 6;
switch (a) {
  // switch에 괄호에는 조건 아닌 값이 들어감
  //케이스에는 값에 대한 경우
  case 3:
    console.log("a가 3입니다.");
    break;
  case 4:
    console.log("a가 4입니다.");
    break;
  case 5:
    console.log("a가 5입니다.");
    break;
  default:
    console.log("a가 어떤 숫자인지 모르겠어요.");
    break;
}

//삼항연산자
let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.assert.log("짝수");
}
//조건? 참 : 거짓
num % 2 === 1 ? console.log("홀수") : console.assert.log("짝수");
let fruit = "banana";
const value = fruit === "banana" ? "yellow" : "red";
console.log(value);

//위에를 if문으로 if익숙해지면 삼항으로
let value2;
if (fruit === "banana") {
  value2 = "yellow";
} else {
  value2 = "red";
}
console.log(value2);
