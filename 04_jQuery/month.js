$('#formm').submit(function(e){
    e.preventDefault()
    let data = $('input[name="date"]').val()
    let content = $('input[name="content"]').val()
    alert(data)


})