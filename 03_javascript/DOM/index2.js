/** 태그 내부 내용 변경 */
// innerText
// textContent
// innerHTML

let div1 = document.getElementById('div1')
console.log(div1)
div1.innerText='     여기는 <b>첫번째<b> 태그입니다.&hearts;     /'
//두칸 이상의  공백 문자 제거 앞뒤로 공백문자 제거 innerText
console.log(div1.innerText)

//아래는 태그를 그대로 읽음 innerHTML
div1.innerHTML='여기는 <b>첫번째<b> 태그입니다.&hearts;' 
console.log(div1.innerHTML)

div1.textContent='     여기는 <b>첫번째<b> 태그입니다.&hearts;     /'
//공백 그대로 textContent
console.log(div1.textContent)  


