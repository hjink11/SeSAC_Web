//1번

let olimpic_newgame: readonly [object, boolean];
olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

// console.log(olimpic_newgame);

//2번
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

//console.log(heroGame_A);
// console.log(heroGame_B);

// 3번
function sum1(a: number, b: number): number {
  return a + b;
}
console.log(sum1(5, 11));

function sum2(...num: number[]) {
  let sum = 0;
  num.forEach((el) => {
    sum += el;
  });
  return sum;
}

console.log(sum2(1, 2, 3, 4, 10));

//4
function arrElement<T>(Arr: T[], Index: number): boolean | T {
  if (Arr.length <= Index) return false;

  return Arr[Index];
}
console.log(arrElement<string>(["a,", "b", "v"], 3));
