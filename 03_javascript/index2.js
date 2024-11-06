/*
자료형의 종류
-문자열 숫자 불린 널 undefined 객체 배열 */

// 1.string
let myName = 'allie'
let email = '[allie@naver.com]'
console.log(myName)
console.log(email)

// 문자와 변수를 동시에 쓰기
console.log('내 이름은', myName)
// let bbbb = '내 이름은 ', myName
let aaaa = '내 이름은' + myName + '이고,  이메일은 '+  email +' 입니다'
// 위에는 작은 따옴표를 잘 봐 
console.log(aaaa)

// 아래 콘솔 출력은 ₩(esc아래)로 + 없이 출력? 값 넣음
let bbbb = `내 이름은 ${myName}이고, 이메일은 ${email}`
console.log(aaaa)
console.log(aaaa)

// number
let number=123
let opacity=0.7
console.log(number)
console.log(opacity)

console.log(number + opacity)
console.log(number - opacity)

console.log('apple'-3)
// NaN (not number)

// boolean
let checked = true
let isShow = false

console.log(checked)
console.log(isShow)

// undefined
let undef;
let obj={
    abc:123
}
console.log(undef)
console.log(obj.abc)
console.log(obj.efg)

// null
let empty = null
console.log(empty)

// array
let fruits = ['orange','apple','mango','banana']
let fruits2 = new Array('orange','apple','mango','banana')

console.log(fruits[3])
console.log(fruits2[1])


let data = [1, true, null, 'string', 100]
console.log(data[0], data[4])

// 2차원배열
let korean=[['가', '나', '다', '겨'],
['나', '냐', '너', '녀'],
['다', '댜', '더', '뎌']]
console.log(korean[2][0])
const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
console.log(letters[3][0], letters[1][3], letters[0][1], letters[0][3], letters[2][2] )
const nums = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
];
console.log(nums[1][0][1])


// object 키와 값 쌍
let cat = {
    name:'나비',
    age:1,
    gender:'F',
    isCute: true }
console.log(cat.name)
console.log(cat.isCute)
cat.like =['tuna', '쥐']
console.log(cat)
// 접근방법 대괄호
console.log(cat['name'])
cat["parent"]='초롱이'
console.log(cat)

// typeof 자료형 확인 
console.log('------------------------------')
let und;
console.log(typeof ' 문자를 넣었을때')
console.log(typeof 100)
console.log(typeof true)
console.log(typeof {}) //object
console.log(typeof [true]) //object
console.log(typeof null) //object
console.log(typeof und) //object
console.log(typeof NaN) //number
console.log(typeof function(){}) //function

// 실습
console.log(typeof 3 + " ins't " + typeof 'aa'  +  " data type")

// 답 array 사용  
// console.log(`${typeof 123} isn't ${typeof ""} data type`)
// console.log("type 를 array나 null에 사용하면," + typeof null + "결과를 얻을 수 있습니다.")
// console.log('typeof를 array나 null에 사용하면, "'+typeof null +' "결과를 얻을 수 있습니다.')

// "number" isn't "string" data type.
// typeof 를 array나 null에 사용하면, "object" 결과를 얻을 수 있습니다.
console.log(`${typeof 123} isn't ${typeof ""} data type.`)
console.log(typeof 123+ ' isn\'t ' + typeof "" +" data type.") //' 대신에 / 사용 가능 
console.log('typeof 를 array나 null에 사용하면, "' + typeof null +'"결과를 얻을 수 있습니다.')

// 형변환
console.log('---------------')
// 1. ?? >> string
let str1 = true
let str2 = 123
let str3 = null
console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))
console.log(typeof str1.toString())

// 2. ?? >> number
let n1 = true
let n1_1 = false
let n2 = "123"
let n3 = "123.5"
console.log(typeof Number(n1)) // true > 1
console.log(typeof Number(n1_1)) // false > 0
console.log(typeof Number(n2))
console.log(typeof Number(n3))
console.log(parseInt(n2))
console.log(parseInt(n3)) // "123.5" > 123 (소수점 버려짐)
console.log(parseInt(3.14))

//prompt는 문자열로 들어옴!!!!!
/* let english=prompt("영어 점수를 입력해주세요")
let math=prompt("수학점수를 입력해주세요")

english = Number(english)
math = Number(math)

let average=(english+math)/2
console.log(average)   */

// 변수
// var 재할당 재선언 가능
var name = "홍길동"
name="gildaong" //재할당 가능

var name="성춘향"  // 재선언 가능   그것이 장점이지만 안 쓰는 것이 좋다 협업이 힘들고 유지보수 힘들기 때문에 

//2. let 재할당 가능 재선언 불가능 
let c  // let은 선언과 값 초기화를 동시에 하지 않아도 됨 지금은 선언만 
console.log('----------')
console.log(c)
c = 5 // 재할당 가능 재선언은 불가능 
c = 15
console.log(c)

//3. const 재할당 재선언 불가능 
// const b 선언과 동시에 초기화 해야함 
const b = 3
// b=5 재할당 불가능 

let q1 = 3
q1 - 2    // q1에 1이 저장 되는 것이 아님 = 안 써서 
console.log(q1) //3

let q2 = 10
q2 = q2 + 10
q2 = q2 - 5
console.log(q2)

console.log('---------')

console.log('=====연산자=======')
/**
 * 연산자
 * 대입연산자 =
 * 비교연산자 == === != > >= < <=
 * 산술연산자 + - * / % **
 * 논리연산자 ! && ||
 */

// 비교연산자 결과값은 true false
console.log('==비교')
console.log(1==1)
console.log(1==2)
console.log(1!=1)
console.log(1!=2)
console.log(1=='1')
console.log(1!='1')
console.log(1!='2')

console.log('===비교')
console.log(1===1)
console.log(1===2)
console.log(1!==1)
console.log(1!==2)
console.log(1==='1')
console.log(1!=='1')
console.log(1!=='2')

console.log('크기비교')
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 <=1)

console.log(' 산술연산자')
console.log(1+2)
console.log(1-2)
console.log(1*2)
console.log(1/2)
//나머지 연산자
console.log(8%5)

//거듭제곱
console.log(2**5)

//논리연산자 
console.log(true)
console.log(false)
console.log(!true)
console.log(!false)
console.log(!!!!false)
console.log(true&&true)
console.log(true&&false)

console.log(true || true)
console.log(false || true)
console.log(true || false) 

console.log(!(2>1)) //false
console.log(2 > 1 && -2 < 1)// true
console.log( (2 > 1 && 0 > -2) || 5 > 2)  // 앞에 가로만 봐도 true 

console.log('---------')
//== 연산자 이용해 
console.log("0" == false)
console.log("0" == 0)
console.log("" == 0)
console.log(undefined==null)
console.log(0==false)
console.log("" == "0")
console.log(false==undefined)
console.log(false==null)

console.log('===')
console.log("0" === false)
console.log("0" === 0)
console.log("" === 0)
console.log(undefined===null)
console.log(0===false)





