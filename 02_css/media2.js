let menubar = document.querySelector('.menu-bar')
let smallmenu = document.querySelector('.small-menu')

menubar.addEventListener('click',function(){
    if(smallmenu.style.display ==='none'){
        smallmenu.style.display = 'block'
    }else{
        smallmenu.style.display = "none"
    }
})