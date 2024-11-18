//1-1 배열의 구조분해 문법
const arr1 = ['tomato', 'kiwi', 'orange']
console.log(arr1[0]) //토마토 출력 정석 
const tomato = arr1[0]  //변수에 그낭 값 저장
const [a,b,c] =arr1  //구조분해
console.log(tomato)
console.log(a)

const arr2 = ['red', 'orange', 'pink', 'yellow']
const [red, orange, , yellow] = arr2  //pink 빼고 구조분해로 배열 저장
console.log(red, orange, yellow) //출력

// 구조분해로 변수 이름에 배열 저장 
const [v1, v2, v3, v4, v5] = arr2 
console.log(v1, v2, v3, v4, v5)  //색 출력.. 없는 값은 undefined 없어도 사용해도 됨 
// 뺴고 싶은 값 은 , 만
// const [a1, b1] = arr1 // 맨 끝에 있는 요소들은 생략 가능 

//변수 교환 
let value1='second'
let value2='first'

//아래는 정석으로 교환 
let temp; // 값을 저장을 위한 임시 변수 (값 교환을 위한)
temp = value1 ;//temp= second
value1 = value2; // value1 =first , 2도 first
value2 = temp ;// value2가 second 
console.log(value1, value2)

value1 = 'second';
value2='first';

[value2, value1] = [value1, value2]
console.log(value1,value2)



//1-2 객체object{}의 구조 분해 할당 문법
const obj = {
    title: '제목',
    content: '내용',
    num:10
}

//값에 접근할때 점과 대괄호 이용 
//정석 사용
console.log(obj.title)
console.log(obj['title'])

//구조 분해
const {num, title, content} = obj
console.log(title)

const { n1, t1, c1} = obj
console.log(n1)

const {content:c2, title:t2} = obj   //키 이름을 바꿈
console.log(t2, c2)

//  spread 와 rest

const arr3 = [ 1,2,3,4,5]
const arr4 = ['a', 'b', 'c']

console.log(arr3)

//아래는 원래 배열 출력시 for of 문으로 
for(let el of arr3){
    console.log(el)
}

// spread
console.log(...arr3)
console.log(...arr3)

// arr3 arr4 합치기 1차원 배열로 
// concat 사용
const arr5 = arr3.concat(arr4)
console.log(arr5)
//이거 spread
const arr6 = [...arr3, ...arr4]
console.log(arr6)

// 2-2 string 을 spread로 배열로
const str = 'alliehigh'
let strToArr = [...str]   // spread로 문자열을 배열로 저장 

// 원래 메소드 사용해서 배열로 변경시 string to array > split()
// array to srting > join()
let strToArr2 =str.split('')
console.log(strToArr)
console.log(strToArr2)

// 2-3 object
const obj1 = {
    name:'allie',
    height:163,
    friend : null,
    married:false
}

let obj2 ={
    name:'진형',
    like:['sleeping','programming'],
    greeting:function(){
        console.log(`안녕하세요, 저는 ${this.name}이고요.. 
            키는 ${this.height}입니다.. `)

    }
}
obj2.greeting()

let me = { ...obj2, ...obj1}
me .greeting()
console.log(me)

// 정보 추가
me={
    ...obj1,
    ...obj2,
    gender:'Female'
}

console.log(me)


// ...rest
function test(a,b){
      console.log(a)
      console.log(b)
}
test(1, 2)
test('안녕')  //b에 드감

function test2(...val){
    console.log(val)    //rest로 받아준 결과는 배열임
    const [a, b, c, ...rest] = val // [2,3,4,5,6,7,8]
    console.log(a)
    console.log(b)
    console.log(c)
    console.log('rest',rest)
}
test2(2,3,4,5,6,7,8)

//매개변수가 몇 개가 들어오든 합해서 반환하는 함수들

//다시
function addNumber(...rest){
    //console.log(rest)
    let sum = 0;
    rest.forEach(function(number){
        sum+=number
    })
    return sum;
}
let sumReasult = addNumber(1,2,3,4,5)
console.log(' 합한 결과값',sumReasult ) //15