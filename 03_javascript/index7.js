console.log('ccc')
//1. Date 
let now = new Date()
console.log(now)
console.log(new Date("September 30, 1990 13:00:00"))

//1970.01.01 00:00:00 초 이후로 몇 초나 지났는지
console.log(new Date(6000000))
console.log(new Date(0))
console.log(new Date(2010, 2, 2))
console.log(new Date(2010, 2, 2, 18,35,50))

console.log(now.getFullYear(), '년')
console.log(now.getMonth(), '월') // 0 ~ 11
console.log(now.getDate(),'일')  //1 ~
console.log(now.getHours(),'시')  //0~23
console.log(now.getMinutes(), '분') //0~ 59
console.log(now.getSeconds(), '초')
console.log(now.getMilliseconds(), '밀리초') //0 ~999
console.log(now.getDay(), '요일') //일부터 토까지 

//조건문 사용해 주말일지 평일인지 

if( now.getDay===0 || now.getDay===6 ){  //get으로 바꾸기
    console.log('주말')
}else{
    console.log('평일')
}

const checkDay = now.getDay()===0||now.getDay()===6?'주말':'평일'
console.log(checkDay)

//Math 객체
console.log(Math.E) //자연로그
console.log(Math.PI)
console.log(Math.SQRT2) //루트2값


console.log(Math.min(50,10)) //가장 작은 값
console.log(Math.max(50,10))
console.log(Math.random())//0<= x <1
console.log(Math.round(5.3)) //소수 정수로 반올림
console.log(Math.floor(5.3))
console.log(Math.ceil(5.3))

//math.random 응용 
//0
//0 ~ 9까지 소스가 아닌 수 뽑기  
//0<= x <1
console.log('난수1:',Math.floor(Math.random()*10))

//1부터 10까지 자연수 난수 
//1부터 10중
console.log('난수2:',Math.floor(Math.random()*10)+1)

//20부터 22까지  22<= x < 23
//0<= x <3 은 *3
//20<= x ,23 +20
console.log('난수3:',Math.floor(Math.random()*3)+20)



const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
    area:'ff'
};

// object의 key만 가져와서 배열로 반환
let key = Object.keys(areaNum)

// object의 value만 가져와서 배열로 반환
let value = Object.values(areaNum)

console.log(key)
console.log(value)