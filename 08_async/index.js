function goMart() {
  console.log("마트에 갑니다.");
}

function pickDrink() {
  //3초 고민 함수
  setTimeout(function () {
    console.log("고민 끝");
    product = "콜라";
    price = 1500;
  }, 3000);
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

let price, product;
goMart();
pickDrink(); // 마지막에 실행 3초 후에 시작이라  이것을 콜백으로
pay();
