//module js의 모든 데이터를 객체 형태로 가져옴 
const module1 = require('./03_module01.js')    //옛날방식
console.log(module1)

const {color} =require('./03_module01.js')    //가지고 오고싶은것만 가져오는 것(객체 구조분해 할당 방법)
console.log(module1)

// 가져오는 방식은 똑같음!
const module2 = require('./03_module02.js')
console.log(module2)

const {name, sayHi} =require('./03_module02.js')
console.log(name)
sayHi()
