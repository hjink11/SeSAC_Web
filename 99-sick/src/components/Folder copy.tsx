import arrow from "../assets/img/drop-down-arrow.png";
import folder from "../assets/img/folder.png";
import "../style/folder.scss";

/* 
- 페이지(Owner >> OwnerMain) -> 컴포넌트((Owner >> OrnerMainContent)
- get "/?????" (useEffect(()=>{},[])로 처음 렌더링시)
로그인(토큰?) 받아서 점주 아이디로 가게이름 조회(회원정보? 가게 테이블?)
-> 조회한 가게이름을 select의 옵션으로 넣어주고 
   -> onchange? 걸기???
-> 옵션이 값이 바뀔때마다 아래 폴더의 Link의 to가 변경(:id?)
   ???? 이때 /어디로????/:????     /owner/shopid?
*/

export default function Folder() {
  const shopName = ["서브웨이", "빽다방", "새싹떡볶이"];
  const menu = ["주문내역", "메뉴관리", "매출관리", "리뷰관리"];

  return (
    <>
      <div className="con w-full flex flex-col items-center">
        {/* 전체 컨테이너 */}
        <div className="titleBorder border-b border-black w-4/5 relative">
          {/* select 밑줄을 위한 div */}
          <div className="selctBox w-56 relative left-10 mb-2 ">
            <select
              name="shop"
              className="text-xl w-36 appearance-none 
              bg-contain bg-no-repeat bg-right 
              font-bold  cursor-pointer"
              style={{ backgroundImage: `url(${arrow})` }}
            >
              {shopName.map((shop, index) => {
                return (
                  <option value="shop" key={index}>
                    {shop}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="folderBox border shadow rounded w-4/5 my-7 flex justify-center">
          <div className="folder w-11/12 grid grid-cols-2 box-content">
            {menu.map((el, index) => {
              return (
                <div
                  className="bg-contain bg-no-repeat w-[19rem] h-72 
                  relative my-0 mx-auto "
                  style={{ backgroundImage: `url(${folder})` }}
                  key={index}
                >
                  <p className="relative top-12 left-6 text-white text-lg">
                    {el}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
