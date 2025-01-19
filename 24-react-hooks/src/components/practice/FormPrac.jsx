import { useForm } from "react-hook-form";

export default function FormPrac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };
  const onInValid = (err) => {
    console.log("유효하지 않은 데이터 입니다.", err);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          {...register("age", {
            validate: {
              ageCheck: (value) => {
                return Number(value) > 0 || "0 이상의 숫자만 입력 가능합니다. ";
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button>제출</button>
      </form>
    </>
  );
}
