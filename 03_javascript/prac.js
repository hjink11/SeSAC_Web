console.log('cccc')

//실습1
/*
let age = Number(prompt('나이를 입력하세요'))
if(age>=20){
    console.log('성인')
}else if(age>=17){
    console.log('고등학생')
}else if(age>=14){
    console.log('중학생')
}else if(age>=8){
    console.log('초등학생')
}else if(age>=0){
    console.log('유아')
}
     */

//실습2
/*
let now = new Date().getHours()
now<=11?console.log('오전'):console.log('오후')
*/
//실습3

/*
let sum4 = Number(prompt('1~1000 까지 중 하나 입력'))
for(let i=1; i<=sum4; i++){
    if(i%13===0 && i%2===1){
           console.log(i)
    }
}
*/

//실습4

let sum2 = 0
for(let i=0; i<=100; i++){
    if(i%2===0 || i%5===0){
        sum2+=i
    }
}
console.log(sum2)


//  실습 구구단 
/*
for(let i=2; i<10; i++){
    console.log(`---${i}단---`)
    for(j=2; j<10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}
*/


//벨로그 연습 
//switch
/*
let score = prompt('성별을 입력하세요')
switch(score){
    case '여성':
        console.log('여성입니다.')
        break
    case '남성':
        console.log('남성입니다.')
        break
    default:
        console.log('?')    
}
*/

//배열 내부의 합 구하기 
let arr = [99, 98, 85, 77, 100, 50]
let value1 = 0
for(let i=0; i < arr.length; i++){
    value1 += arr[i]
}
console.log(value1)