console.log(document)
console.log(document.URL)
console.log(document.documentElement)

console.log(document.head)
console.log(document.body)
console.log(document.title)

//1. getElementById
console.log(document.getElementById('green'))    //헤드 안에 자바스크립 썼을 때는 아무것도 안 나오지만 defer 써주면 상관 없음 
console.log(document.getElementById('red')) 

// getElementsByClassName    elementssssss 여러개
console.log(document.getElementsByClassName('pink'))
console.log(document.getElementsByClassName('pink')[0])  //배열이라서 이렇게 하나 가능
console.log(document.getElementsByClassName('others'))

//getElementsByTagName
console.log(document.getElementsByTagName('div'))
console.log(document.getElementsByTagName('div')[0])

//getElementsByName (네임속성값으로 가져옴 )
console.log(document.getElementsByName('id'))
console.log(document.getElementsByName('id')[0])

//querySelector('css선택자')   가장 많이 사용
console.log('-----------')
console.log(document.querySelector(".pink"))
console.log(document.querySelector(".others"))   //여러개 중 첫번째
console.log(document.querySelector("#green"))
console.log(document.querySelector("#red"))
console.log(document.querySelector("div"))
console.log(document.querySelector("[name='id'"))


//querySelectorAll
console.log(document.querySelectorAll('.pink'))  //배열 형태의 노드리스트로 가져옴 하나만 가져와도 배열 형태로 가져옴 


// 실습
let pinks = document.querySelectorAll('.pink')
//for of 문 이용해서 pink 클래스 모두 출력 
for(let tag of pinks){
    console.log(tag)
}

