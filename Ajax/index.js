let request = new XMLHttpRequest()
request.open('GET','https://fakestoreapi.com/products')
request.send()
request.onload = ()=>{
    console.log(JSON.parse(request.response));
}