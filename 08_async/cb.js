function goMart() {
  console.log("마트에 갑니다.");
}

//   콜백함수 이용해서 pickDrink 작업 끝난 뒤 Pay가 실행 되도록
function pickDrink(callback) {
  //3초 고민 함수
  setTimeout(function () {
    console.log("고민 끝");
    product = "콜라";
    price = 1500;
    //   10번~12번 라인 실행 후 callback 호출
    callback(); //매개변수로 넘겨진 callback함수
  }, 3000);
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

let price, product;
goMart();
pickDrink(pay); // pickDrink 이후에 pay 실행되도록
//   pay();
