localStorage.setItem("Name","Sudesh")
localStorage.setItem("Place","Mysore")


localStorage.clear()


localStorage.removeItem("Place")




let name = localStorage.getItem("Name")
let place = localStorage.getItem("Place")
document.write(`My name is  ${name} And i came from  ${place}`)