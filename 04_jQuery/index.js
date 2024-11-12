console.log('1111')

// 요소 선택 방법
// $("css 선택자")
console.log($('#div1'))

//여러 요소에 한번에 적용 (selectAll for문 필요 없이)
$('button').css('color', 'red')

function submitjs(){
    // div id=div1   가져옴
    document.getElementById('div1').innerText = '반갑습니다!!'
    document.getElementById('div1').setAttribute('style', 'border:2px solid red')
}
function submitjQ(){
    $('#div1').text('hello jQuery')
    $('#div1').css('border', '3px dotted blue')
    
}
