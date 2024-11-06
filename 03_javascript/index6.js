// 문자열에서 사용하는 속성과 매소드
// length 속성
//toUpperCase, toLowerCase, trim, indexOf, slice
//replace, replaceAll,repeat, split

let str1 = 'Strawberry Moon'
let str2 = '   Strawberry Moon  '

//문자열 인덱싱
console.log(str1[0])
console.log(str1[0]+str1[11])

//sonny
console.log(str1[0]+str1[12]+str1[14]+str1[14]+str1[9])

//length 속성
console.log(str1.length)
console.log(str2.length)

//메서드 사용
//문자열.메서드() 형태로 사용
console.log(str1)
console.log(str2)
//trim 공백
console.log(str2.trim())
console.log(str2.trim().length)

console.log(str1.toLocaleLowerCase())
console.log(str1.toUpperCase())

//indexOf, charAt, slice  인자가 들어감 ()
let fruit = 'applemango'
//indexOf 찾고싶은 문자열 인덱스번호 반환
console.log(fruit.indexOf('e'))
console.log(fruit.indexOf('a'))
console.log(fruit.indexOf('apple')) //0
console.log(fruit.indexOf('mango')) //5
console.log(fruit.indexOf('z')) //없는 문자열 찾으려고하면 -1반환 

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10)) //암것도 없음

console.log(fruit.slice(5)) //mango
console.log(fruit.slice(3, 6))
console.log(fruit.slice(-1))  //뒤에서 부터 o
console.log(fruit.slice(-4)) //ango

console.log(fruit) // 변경되지 않았음


//replace, repaceAll  이거해도 원래 값은 바뀌는 것은 아닙 바꾸고 다시 저장해야
let msg1 = 'Wow~ It is so amazing!!! Wow'
console.log(msg1.replace('Wow', 'Hey~~~'))  //하나만 바뀜
console.log(msg1.replaceAll('o', 'OO')) //

let date ='2024.11.06'
//YYYY-MM-DD
date = date.replaceAll('.', '-')    //바꾸고 저장하는 법
console.log(date)

let hello ='hello'
console.log(typeof hello)


let hello2 = hello.split()
console.log(hello2) 

hello2 = hello.split('')
console.log(hello2)

hello2 = hello.split('e')
console.log(hello2)
console.log(typeof hello2)


//위에 date['2024','11','06]
date=date.split('-')
console.log(date)