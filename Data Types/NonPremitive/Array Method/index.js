let a = [1,2,3,4,5]
console.log(a);

let b = a.push(6,7,8)
console.log(a);

let c = a.pop()
console.log(a);

let d = a.unshift(0)
console.log(a);

let e = a.shift()
console.log(a);

let f = a.map((e)=>e*2)
console.log(f);


let g = a.filter((e)=>e>3)
console.log(g);


let h = a.find((e)=>e>5)
console.log(h);

let i = a.reduce((f,s)=>{
    return f+s
})

console.log(i);




for (const arr in a) {
    console.log(arr);
}


for (const arr of a) {
    console.log(arr);
}

let j = a.forEach((v,i)=>{
    console.log(`${v}==${i}`);
})

let k = a.reverse()
console.log(k);

let l = a.join("")
console.log(l);
