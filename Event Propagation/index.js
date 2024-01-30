let dada = document.getElementById("grandparent")
dada.addEventListener("click",()=>{
    dada.style.background="red"
    console.log("Dada");
})

let papa = document.getElementById("parent")
papa.addEventListener("click",()=>{
    papa.style.background="green"
    console.log("papa");
})


let Beta = document.getElementById("child")
Beta.addEventListener("click",()=>{
    Beta.style.background="blue"
    console.log("beta");
})