async function x(){
    let data = await fetch("https://fakestoreapi.com/products")
    console.log(data);
    let finalData = await data.json()
    console.log(finalData);
    finalData.map((e)=>{
        let body = document.body
        let section = document.createElement('section')
        section.innerHTML += `<div class="cards">
        <img src=${e.image} height="200px" width="200px">
        <p>${e.title}</p>
        <p>${e.price}</p>
        <p>${e.rating.rate}</p>
        <button>Add Cart</button>
        </div>`
        body.appendChild(section)
    })
}
console.log(x());