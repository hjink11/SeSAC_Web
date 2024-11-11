//img, h3, div 

for(let i=1; i<10; i++){
    //img
    let img = document.createElement('img')
    img.setAttribute("src", `./img/icecream${i}.png`) 
    img.classList.add('img-box')
    //h3
    let h3 = document.createElement('h3')
    h3.innerText =`Top ${i}`
    h3.classList.add('text-center')
    //div
    let div = document.createElement('div')
    div.innerText = `${icecreams[i-1]}`
    div.classList.add('text-center')
    
    //article
    article = document.createElement('article')
    article.classList.add('article-box')
    article.append(img, h3, div)
    
    //sction
    section.append(article)
}
