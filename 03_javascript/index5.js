console.log('cccs')


//for 문 
// for(변수선언과 초기화; 조건식(어디까지 감소,증감); 증감){ 반복실행코드}
/** 증감식: i++, i=i+1, i+=1 */



for(let i=0; i<10; ++i){
    console.log('안녕', i)
}

for(let i=0; i<10; i=i+2){
    console.log(`안녕, ${i}`)
}


//1부터 5까지 
for(let i=1; i<=5; i++){
    console.log(i)
 }
 
for(let i=0; i<5; i++){
    console.log(i+1)     //0부터지만 여기서 i에 1을 더해서 1부터 시작 
}


//5~1
for(let i=5; i > 0; i--){
    console.log(i)
}

let fruits = ['apple', 'banana', 'orange', 'mango']
console.log(fruits.length)

for( let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}



//반복문 덧셈
let n = 11
let sum = 0

 sum =0
 sum = sum + 1 >1
 
 

for(let i=1; i<=n; i++){
    sum = sum + i 
}
console.log(sum) 
// 66나옴

//배열 내부의 합 구하기 
let arr = [99, 98, 85, 77, 100, 50]
/*
let value1 = 0
for(let i=0; i<=5; i++){
    value1 = value1 + arr[i]
}
console.log(value1)
*/
//정답
let sum2 = 0
for(let i=0; i<arr.length; i++){
    sum2+=arr[i]
}
console.log(sum2)
// 답 509

//1이상 20이하 수 중에서 짝수만 더한 값 출력하기 20번 실행 중
let sum3 = 0
for(i=1; i<=20; i++){
    if(i%2===0){
        sum3+=i
    }
}
console.log(sum3)
//더 간단하게 0부터 2씩 늘어나서 11번 반복 
sum4 = 0
for(i=0; i<=20;i=i+2){
       sum4+=i
}
console.log(sum4)


let sum5=0;
//홀수의 합
for(let i=0; i<10; i++){
    // if(i%2==1) sum5+=i
    if(i%2==0) continue; // 다음 반복으로 넘어가주세요
    sum5 = sum5 + i
}
console.log(sum5)

for(let i=0; i<5;i++){
    console.log(i)
    for(let j=0; j<5; j++){
        console.log('j:',j)
    }
}

//구구단 주석처리 (너무 길어서 ${}버전으로 바꿔)
/*
for(let i=2; i<10; i++){
    console.log(i+'단')
     for(let j=1; j<10; j++){
        console.log(i,'X',j,'=',i*j)

     }
}
*/

// while문
let n1=1
while(n1<=5){
    console.log(n1)
    n1++
}

let n2 = 9
while(n2>=5){
    console.log(n2)
    n2--
}

// while문으로 홀수 출력 10~ 1
let n3 = 10
while(n3>=1){
    if(n3%2===1) console.log(n3)
    n3--
}


// 밑에 break 없으면 에러
/*   break 써도 에러? 
let a=0
while(true){
  console.log(a)
  if(a > 10){
  break
  }
}
*/
let a2=0
while(confirm('계속 진행하시겠습니까?')){
    //확인>true 취소>false
    a2++
    alert(`${a2}번째 alert 창`)
}
