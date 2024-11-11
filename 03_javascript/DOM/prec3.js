const body = document.querySelector('body')
btn = document.querySelector('button')
h2 = document.querySelector('h2')

btn.addEventListener("click", function(){
    //버튼 클릭시 배경 색 변경
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    //버튼 클릭시 h2 색상 변경 
    h2.innerText = `rgb(${r}, ${g}, ${b})`

})


