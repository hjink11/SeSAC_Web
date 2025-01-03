const bcrypt = require("bcrypt"); // npm install bcrypt 후 불러오기

const saltRounds = 10; //암호화에 사용할 salt 수준 설정

// 암호화 함수
function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}

//비번 일치 여부 확인 함수
function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw); // 들어오는 것과 암호화 된것이 맞는지 메서드 제공 true, false
}

const originalPw = "1234";
const hashedPw = hashPw(originalPw); //1234 암호화
console.log("암호화된 비밀번호", hashedPw); //암호화된 비번 출력

//비번 확인
const isMatch = comparePw("1234", hashedPw); //1234 가 암호화된 비번과 일치하는지
const isMatch2 = comparePw("12345", hashedPw); //12345가 일치하는지

console.log("비밀번호 일치?>>", isMatch); //true
console.log("비밀번호 일치?>>", isMatch2); // false
