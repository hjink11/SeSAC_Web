    let Form = document.querySelector('form')
    let ul = document.querySelector('.comment-list')

    Form.addEventListener('submit', function(nn){
        nn.preventDefault() //이벤트시 새로고침 막음 

        //id input 선택
        let userId = document.querySelector('#userid')
        let comment = document.querySelector('#comment')
        

        //공백문자 되지 않도록   공백 안들어오는 if도 있어
       let userr = userId.value.trim()
       let comm = comment.value.trim()

       let li = document.createElement('li')
       li.textContent = `${userr} - ${comm}`
       ul.append(li)

      userId.value = ""
      comment.value = ""
})

