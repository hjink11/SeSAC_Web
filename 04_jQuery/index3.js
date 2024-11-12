console.log(window)
console.log(document)
// 위는 JS 밑에는 JQ
console.log($(window))
console.log($(document))

// click() 클릭 했을때
// JQ에서는 이벤트 이름으로 메서드 존재 
//요소.click(function(){}), 요소.hover(function(){}, function(){ 빠져 나갔을 때})
$('.p-msg').click(function(){
    $('.p-msg').css('color', 'red')
})

$('.num').click(function(){
    //$('.num').css('color','blue')
    //$(this).css('color', 'green')  //JQ의 this는 자기 자신만 전체가 아니라 !
})

// $('.num').on('click', function(){
//     $(this).css('color', 'pink')
// } )

//JS  위에거를 Js를 바꾸면 
let nums = document.querySelectorAll('.num')  //for문으로 해야 접근!!!!!
for(i=0; i<nums.length; i++){
    console.log(nums[i])
    nums[i].addEventListener('click', function(){
        this.style.color = 'blue'
    })
}


// hover 마우스를 올렸을 때, 마우스를 떼었을 때 정의 
$('.div-hover').hover(function(){
    $(this).addClass('hover')
} ,     //익명함수 두개!!
function(){
    $(this).removeClass('hover')
}
)

$(window).scroll(function(){
    console.log('scrolling............')
})


// 키보드 이벤트
// input.addEventListener('keydown', function(event){
//     //console.log(event)

//     //방향키 아래 위 왼쪽 오른쪽
//     console.log(event.code)  //정보를 알려줌 방형키면 Arrow 정보를 
//     console.log(event.key)
//     if(event.code==="ArrowLeft"){
//         console.log('왼쪽 방향키 눌렀습니다.')
//     }else if(event.code==='ArrowRight'){
//         console.log('오른쪽 방향키가 눌렀습니다.')
//     }else if(event.code==='ArrowUp'){
//         console.log('위쪽 방향키가 눌렀습니다.')
//     }else if(event.code==='ArrowDown'){
//         console.log('아래쪽 방향키가 눌렀습니다.')
//     }
// })

$('.input-key').keydown(function(e){
    if(e.code==="ArrowLeft"){
                console.log('왼쪽 방향키 눌렀습니다.')
            }else if(e.code==='ArrowRight'){
                console.log('오른쪽 방향키가 눌렀습니다.')
           }else if(e.code==='ArrowUp'){
                console.log('위쪽 방향키가 눌렀습니다.')
            }else if(e.code==='ArrowDown'){
                console.log('아래쪽 방향키가 눌렀습니다.')
            }
})


$('#todo-form').submit(function(e){
    //기본 동작 막기 (새로고침 막기)
    e.preventDefault()
    //input 태그에서 작성한 극장 가져오기 
    const inputValue = $('input[name="todo"]').val()
    //DOM에 index3.jsdptj 124,131 라인을 한줄에 


    //li 태그 만듦과 동시에 ul에 추가
    $('.todos').append(`<li>${inputValue}</li>`)     //여기 백틱문자임 ``   !!!
    //138~140 라인까지임 


    //input초기화
    $('input[name="todo"]').val('')   //145라인 
})


