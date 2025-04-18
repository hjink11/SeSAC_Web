import ProductItem from "../components/ProductItem";

export default function ProductPage({ products }) {
  return (
    <main className="ProductPage">
      <div>여기는 상품목록</div>
      {/* components 폴더에 있는 컴포넌트  */}
      {products?.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </main>
  );
}
