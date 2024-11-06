console.log('connected')

//특정 작업을 수행하기 위한 코드집합 = 함수
/** 
 * 함수의 선언 구조
 * 키워드 : function
 * 함수의 이름 :camleCase 로 함수의 이름 작성 
 * (매개변수): 함수 내부에서 사용할 변수 ..인수 
 * {스코프} : 함수 내부 코드 
 * 함수 선언문 , 함수 표현식 
 * - 함수표현식 :변수에 함수를 저장
 * - 함수 선언문: 명시적 함수 선언 
*/
//함수 선언문!!!!!!!!!!!
helloWorld1()
console.log('선언되기 전')
//함수 선언문 !!!!!!!
function helloWorld1(){
    console.log('helloWorld1')
}

helloWorld1()

function helloWorld2(){
    // return 키원드는 함수 내부 코드의 최종 결과값을 보관하기 위한 키워드 
    return 'hello World 2'
    // 리턴 밑에는 나오지 x
    console.log('리턴아래')
}
 console.log(helloWorld2())

//함수 표현식!!!!!!!! 선언되기 전에 호출 불가능
const helloWorld3 =function (){
    console.log('hello World3')
}
helloWorld3()


//화살표 함수!!!!!   선언되기 전에 호출 불간능
const helloWorld4 = () => {
    console.log('hello World4')
}
helloWorld4()

//매개변수가 있는 함수 
/** 
 * 1. 매개변수 1개 함수 선언문
 */
function sayHello1(text){
    return text
}
console.log (sayHello1('안녕!'))

// 매개변수 2개

function sayHello2(text, name){
    return `${text}! ${name}`
}

console.log(sayHello2("안녕", "allie"))


//함수 표현식  내부 스코프 console로  작성 
const sayHello3 = function(text, name){
    console.log(`${text}! ${name}`)
}
sayHello3("안냥", "allie")

//화살표 함수 리턴!
const sayHello4 = (text, name) => {
     return `${text}! ${name}`
}
const sayHello4value = sayHello4("hello", "ali")
console.log(sayHello4value)

//실습
function multifly(num1, num2){
         return num1*num2
}
console.log(multifly(3, 4))

const square = function(num1){
    console.log(num1**2)
}
square(3)
