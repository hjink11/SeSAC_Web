import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  const navigate = useNavigate(); // import 하고 뒤로가기 이동등 함수임

  console.log(products); //전체 배열

  //params 통해서 몇 번 id 정보를 찾고 있는지 확인
  //id 기준으로 products 에서 원하는 데이터 찾기
  const params = useParams(); //import
  console.log("params", params);
  //{productID:"1"}, key 이름의 출처? Route컴포넌트의 path props 확인

  // 상수로 productID = 1  구조분해배열?
  const { productID } = useParams();

  console.log(productID);

  //productID 기준으로 products에서 원하는 데이터 찾기 {} (문자열)
  const [targetProduct] = products.filter((p) => p.id === Number(productID));
  console.log(targetProduct); //{}객체이거나 (없을때는)undefined 임
  //targetProduct 없다면 (/product/44 같이 없는 id 일때)
  if (!targetProduct) {
    return <main> 없는 상품이예요</main>;
    // 밑에는 무시 된다
  }

  return (
    <main>
      <p>여기는 상품 디테일 페이지</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      {/* 아래는 특정페이지 이동  */}
      <button onClick={() => navigate("/")}>홈으로 이동 </button>
      <ul>
        <li>판매번호 : {targetProduct.id} </li>
        <li>상품명 : {targetProduct.name}</li>
        <li>판매자 : {targetProduct.emial}</li>
        <li>상세설명 : {targetProduct.body} </li>
      </ul>
    </main>
  );
}
