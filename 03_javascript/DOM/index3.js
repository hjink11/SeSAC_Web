console.log('aa')

/**
 * 동작의 종류 click, dbclick, scroll, change, submit
 * addEventListener(동작의 종류, function(){})
 * <태그 onchange="함수의 이름()" onclick="함수의 이름()"></태그>
 * on[동작의 종류] 속성으로 이벤트 제어 가능
 */

const btn1 = document.querySelector('.btn--black')
const btn2 = document.querySelector('.btn--green')
const btn3 = document.querySelector('.btn--blue')
const btn4 = document.querySelector('.btn--red')
console.log(btn2)   //확인

// btn1.addEventListener("동작이름", function(){})
btn1.addEventListener("click", function(){
    console.log("버튼1이 클릭")
    alert('버튼1이 클릭!!!')
})

btn1.addEventListener("mouseover", function(){
    this.style.backgroundColor = "aqua"     //function(){}에서 this는 자기 자신임 btn1대신 쓰임ㄴ
})

//btn2 눌렀을 때 div 자식으로 붙이기
const container = document.getElementById('container')
btn2.addEventListener('click',()=>{        //화살포함슈
   let div = document.createElement('div')
   div.innerText = 'Hi'
   div.style.backgroundColor = 'pink'

   container.append(div)
})

//btn3 눌렀을 때 만들어진 div 색 바꾸기 
btn3.addEventListener('click', changeColor)  //밑에 함수 호출시 여기서 () 지워야함 아니면 즉시 호출임 우리는 이벤트 실행시에만이니
btn4.addEventListener('click', changeColor)


function changeColor(){
    const divs = document.querySelectorAll('#container div')  //후손 > 대신 띄어쓰기
    for(let div of divs){
        div.style.backgroundColor='skyblue'
    }

   //막내요소만 노랑색으로 변경  !!!!!! .nextElementSibiling 형제 요소가 null일 때
   for( let di of divs){
     if(di.nextElementSibling===null){
        di.style.backgroundColor='yellow'
     }
   }
  
  
    
}

//버튼 4에게는 배경생이 노랑색으로 글자는 검정 변경되는 함수 
btn4.addEventListener('click', changeBtnColor)
function changeBtnColor(){
    this.style.backgroundColor='yellow'
    this.style.color='#000'
}

//btn5를 누르면 alert 띄우기  onclick 으로
function sayHi(){
    alert('안녕하세요! 버튼 5입니다')
}


//==================================
const btn =document.querySelector('button')
const input = document.querySelector('input')

// 클릭 이벤트 
btn.addEventListener('click', function(event){
    //클릭 이벤트에 관한 정보 (event 객체 이름 상관x)  
    console.log(event)
      //어떤 요소가 클릭되었는지 확인 가능
    console.log(event.target)
})

//=====================================
// 키보드 이벤트
input.addEventListener('keydown', function(event){
    //console.log(event)

    //방향키 아래 위 왼쪽 오른쪽
    console.log(event.code)  //정보를 알려줌 방형키면 Arrow 정보를 
    console.log(event.key)
    if(event.code==="ArrowLeft"){
        console.log('왼쪽 방향키 눌렀습니다.')
    }else if(event.code==='ArrowRight'){
        console.log('오른쪽 방향키가 눌렀습니다.')
    }else if(event.code==='ArrowUp'){
        console.log('위쪽 방향키가 눌렀습니다.')
    }else if(event.code==='ArrowDown'){
        console.log('아래쪽 방향키가 눌렀습니다.')
    }
})

//===================
// scroll 이벤트 
//console.log(window)

window.addEventListener('scroll',(event)=>{
    //console.log(event)
    //console.log(scrollY)
    //scrollY 704 에서 div opacity가 1이 되도록 위 주석 빼서 위치 알아서
    if(scrollY > 704){
        document.querySelector('.pos').style.opacity="1"
    }
})


// ===============
//폼 이벤트 
// submit 많이 사용
const todoForm = document.querySelector('#todo-form') // from 태그
const todos = document.querySelector('.todos') //ul 태그 

todoForm.addEventListener('submit', function(e){
    e.preventDefault()       
    // 위에는 이벤트될때 (엔터도)새로고침 막는것 여기서는 폼이 제출되는 것 취소 
    
    console.log('submit')
   
    //폼 내부에 input 선택   ( 안에는 정확하게 어떤    input 가져오는지)
    const todoInput = document.querySelector('input[name="todo"]')
   
    //console.dir(todoInput) //요소가 가지고 있는 데이터 다 출력
    // console.log(todoInput.value)      확인하는것

    
    //공백으로 들어오는 문자 추가 되지 않도록
    const todo = todoInput.value.trim()
    console.log('todo:'+ todo)

    
    //+if 문으로 "" 문자 막아 주기 
   if(todo !==""){
    // ul 태그 선택=todo 에 자식으로 <li>todo</li> 만들어서 붙이기
    const li = document.createElement('li')
    li.textContent = todo //글자 만듬
    todos.append(li)
   }else{
      alert("오늘의 할 일을 작성해주세요😢")
   }

   todoInput.value=""   //엔터로 넘기면 빈칸되고 
})

// change 이벤트   다시 찾아봐 모름
const chgInput =document.querySelector('#change-input')
chgInput.addEventListener('change', function(){
    console.log('changed!!!')
})

chgInput.addEventListener('input', function(){
    console.log('changing!!!')
    // input 창의 value에 변경이 발생되면 일어나는 이벤트 
    
    //위에 input창에 써는 글들 아래 div(intro)에 나오는 방법 
    let intro =document.querySelector('.intro')
    intro.innerHTML = this.value
})