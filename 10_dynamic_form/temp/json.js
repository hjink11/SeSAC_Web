// JSON 형식
// JavaScript Object Notation
/*
!!!!! 꼭 쌍따옴만 된다 ''은 안됨!!!!!!!
{
"name":"allie",
"married":"false",
"family":{"father":"ddd",}
}

object였다면  name:"allie" 였을것  !주의! 값을 쓸 때 따옴표 없는 것도 있다.  */

const car = `{
"model" :"아이오닉6",
"company":"현대",
"price":50000000,
"year":2023,
"isElectric":true,
"option":["side mirror", "smart sensor"]
}`;
console.log(typeof car);
//JSON.parse() > JSON ----> object
const obj = JSON.parse(car);
console.log(obj);
console.log(typeof obj);
console.log(obj.model);
console.log(obj.option);

//JSON.stringify()  object -----> JSON
const carJson = JSON.stringify(obj);
console.log(carJson);
console.log(typeof carJson);

//stringify() 의 두번쨰 인자(5)는 들여쓰기 하는 것
const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson2);
console.log(carJson2.model); //undefined (JSON 문자열)

const dogyJson = `{
    "name" :"cookie",
    "gender":"여아",
    "age":5,
    "isCute":true,
    "favorite":["toy", "treat"]
    }`;

const dogyObject = {
  name: "cookie",
  gender: "여아",
  age: 5,
  isCute: true,
  favorite: ["toy", "treat"],
};
