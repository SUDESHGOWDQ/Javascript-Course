sessionStorage.setItem("name","Vikas")
sessionStorage.setItem("age",24)



sessionStorage.clear()

sessionStorage.removeItem("age")

let name = sessionStorage.getItem("name")
let age = sessionStorage.getItem("age")
document.writeln(`My name is ${name} and my age is ${age}`)