let a = document.getElementById('btn2')
a.addEventListener('click',()=>{
    let card = document.querySelector('#card')
    let article=document.createElement('article')
    article.id="art"
    article.innerHTML+=`<form action="" method="get" onsubmit="fetch()">
    <input type="text" placeholder="Comment" id="ip1">
    <button type="submit">❤</button>
    </form>`
    card.appendChild(article) 
})


function fetch(){
    let ip1 = document.getElementById('ip1').value
    let article = document.getElementById('art')
    article.innerHTML+=`<p id="sp1">${ip1}</p>
    <button  id="btn4"><i class="fa-solid fa-trash"></button>
    `
}


let c = document.getElementById('btn3')
c.addEventListener('click',()=>{
    window.open('https://instagram.com')
})



let b = document.getElementById('btn4')
b.addEventListener('click',()=>{
    let sp1 = document.getElementById('sp1')
    sp1.remove()
})


