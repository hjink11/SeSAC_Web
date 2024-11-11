//1번

//let span = document.querySelector('span')
//span.innerText = '맛없다 --;;'
//span.style.fontWeight = 'bold'
//span.style.color = 'red'



// 2번 
let li = document.querySelectorAll('li')


for( let el of li){
    if(el.classList.contains('done')){
        el.setAttribute("class", "todo")
    }else{
        el.setAttribute("class", "done")
    }
}
  
