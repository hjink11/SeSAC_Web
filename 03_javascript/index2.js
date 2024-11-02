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
let aaaa = '내 이름은' + myName + '이고, 이메일은 '+email+'입니다'
console.log(aaaa)

// 아래 콘솔 출력은 ₩(esc아래)로 + 없이 출력
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














