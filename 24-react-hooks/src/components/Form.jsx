import { useForm } from "react-hook-form";
export default function Form() {
  const {
    register, //input 변경 감지
    handleSubmit, //form 의 submit 이벤트 발생시 호출
    watch, //특정 필드의 값을 실시간 관찰
    formState: { errors },
  } = useForm();

  //단축 평가
  //console.log("단축평가 || 논리합", true || "hello"); // or 니까 앞에서 true 멈추고 true 출력
  //console.log("단축평가 || 논리합", false || "hello"); //hello
  //console.log("단축평가 && 논리곱", true && "hi"); // and니까 hi
  //console.log("단축평가 && 논리곱", false && "hi"); // false

  const userNameRegister = register("username");
  //console.log(userNameRegister); //register 반환값은 객체

  //에러가 나면 에러 콘솔에 뜨고 에러가 없어도 빈객체로{}로 콘솔에 뜸
  console.log("errors", errors);

  const onValid = (data) => {
    console.log("유효한 데이터", data);
    //{email, username, password}

    //axios 연결 요청
  };
  const onInValid = (err) => {
    console.log("유효하지 않은 데이터", err);
    // 폼 내부에 작성한 유효성 검사가 실패했을 때의 코드 작성

    //확인용
    console.log("watch", watch());
    console.log("watch username", watch("username"));
  };

  return (
    /*
  handleSubmit(funcA[, funcB]) : 인자로 함수를 두개 받을 수 있음
   - 자동으로 새로고침 방지 (prevent 같이?)
   -funcA : 필수 ! 유효성 검증이 모두 만족했을 떄, 실제 제출시 실행
   - funcB: 선택, 우효하지 않을 때 실행되는 함수 
*/

    <form
      style={{ border: "1px solid salmon" }}
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      {/* 전개 연산자로 펼쳐서? ...register로 name속성등등을  대신 사용  */}
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          //required 가 지켜지지 않았다면 errors 객체로 메세지 전달됨
          // errors.username.message로
          required: "이름을 입력해주세요",
          minLength: {
            message: "이름은 최소 두글자 이상으로 입력해주세요.", //지켜지지 않았을 때 메세지
            value: 2, //minLength
          },
        })}
      />
      {errors.username?.message}
      {/* username 있다면 메세지 나옴 */}

      <br />
      <input
        type="email"
        placeholder="email(gmail)"
        {...register("email", {
          required: "이메일을 입력해주세요",
          validate: {
            useGmail: (value) => {
              // 인자로 들어오는 value는 input.value

              return (
                // 앞의 연산이 true 라면 true 리턴
                // fales 라면 메세지
                value.includes("gmail.com") || "gmail로만 가입 가능합니다. "
              );
            },
          },
        })}
      />
      {errors.email?.message}
      <br />
      <input type="password" placeholder="password" {...register("password")} />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
