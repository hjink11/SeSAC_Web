import React, { useState, useMemo } from "react";

const ProductFilter = () => {
  // 상품 가격 제한 상태 관리
  const [priceLimit, setPriceLimit] = useState(0);

  const products = [
    { name: "Product A", price: 30 },
    { name: "Product B", price: 50 },
    { name: "Product C", price: 70 },
  ];

  const filteredProducts = useMemo(() => {
    // 여기에 필터링 로직 작성
    // props 예제에서는 filter를 배열을 새로운 변수에 저정하던데 여기서는 바로 return 해도 되는 군
    return products.filter((list) => list.price < priceLimit);
  }, [
    /* 의존성 배열 작성 */
    priceLimit,
  ]);

  return (
    <div>
      <h2>Product Filter</h2>
      <input
        type="number"
        value={priceLimit}
        placeholder="Enter price limit"
        onChange={(e) => {
          setPriceLimit(Number(e.target.value));
        }}
      />
      <ul>
        {filteredProducts.map((el, i) => {
          return (
            <li key={i}>
              {el.name} - {el.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductFilter;
