let a = document.getElementById('p1')
a.style.background="black"
a.style.color="white"
console.log(a);

let b = document.getElementsByClassName('spc1')
for(let i=0;i<b.length;i++) {
    b[i].style.background="orange"
}
console.log(b);

let c = document.getElementsByTagName('span')
for(let i=0;i<c.length;i++) {
    c[i].style.color="white"
}
console.log(c);


let d = document.querySelectorAll(".spc1")
d.style.fontSize="20px"