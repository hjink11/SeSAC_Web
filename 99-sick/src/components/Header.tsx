// import logo from "../assets/img/Logo.png";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <div className="w-full h-20 p-1 mb-10  box-content relative flex items-center">
      <div className="logoBox m-2 cursor-pointer">
        <img src={logo} alt="logo" className="w-36 h-36 " />
      </div>
      <button
        className="h-10 border border-amber-500 px-3  rounded  text-amber-500 absolute right-[30px] font-semibold
      hover:bg-amber-500 hover:text-white "
      >
        로그인/회원가입
      </button>
    </div>
  );
}
