let a = document.getElementById('dark')
a.addEventListener('click',()=>{
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
})


let b = document.getElementById('light')
b.addEventListener('click',()=>{
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
})


let c = document.getElementById('ip1')
c.addEventListener("keyup",()=>{
    document.body.style.backgroundColor="green"
})



let d = document.getElementById('ip1')
d.addEventListener("keydown",()=>{
    document.body.style.backgroundColor="red"
})