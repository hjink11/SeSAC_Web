//DOMContentLoaded 이벤트는 HTML 문서가 완전히 구문 분석되고
// 모든 지연된 스크립트(<script defer src="…">와 <script type="module">)가
// 다운로드되고 실행될 때 발생

document.addEventListener("DOMContentLoaded", () => {
  const pw1 = document.getElementById("userPw1"); // 패스워드 입력 필드
  const pw2 = document.getElementById("userPw2"); // 패스워드 확인 필드
  const check1 = document.querySelector(".check1"); // userpw1의 span
  const check2 = document.querySelector(".check2"); // userpw2의 span

  // 비밀번호 유효성 검사 정규식
  const regPw =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$])[A-Za-z\d!@#$]{5,15}$/;

  // 비밀번호 유효성 검사 및 일치 여부 확인 함수
  function valiPw() {
    console.log("!!!!!!!!"); // 확인 후 삭제
    const pwP = document.querySelector(".pwP");
    const isPw1Vali = regPw.test(pw1.value); // userpw1 유효성 검사
    const isPwMatch = pw1.value === pw2.value && pw1.value !== ""; // 비밀번호 일치 여부

    // userpw1의 유효성 검사 결과에 따라 체크 이미지 표시
    if (isPw1Vali) {
      check1.style.display = "block"; // 유효한 경우 보이기
      pwP.innerText = "영문 소/대문자, 숫자, !@#$ 포함 5 ~ 15자";
      pwP.style.color = "rgba(160, 160, 160, 1)";
    } else {
      check1.style.display = "none"; // 유효하지 않은 경우 숨기기
      pwP.innerText =
        "비밀번호는 영문 소/대문자, 숫자, !@#$ 포함 5 ~ 15자여야 합니다.";
      pwP.style.color = "red";
    }

    // userpw1과 userpw2가 일치하는 경우 두 필드의 체크 이미지 표시
    if (isPw1Vali && isPwMatch) {
      check2.style.display = "block"; // 일치하는 경우 보이기
    } else {
      check2.style.display = "none"; // 일치하지 않는 경우 숨기기
    }
  }
  // 패스워드 입력 필드 변화 감지
  pw1.addEventListener("input", valiPw); // userpw1에서 입력 이벤트 발생 시 검사
  pw2.addEventListener("input", valiPw); // userpw2에서 입력 이벤트 발생 시 검사
});
