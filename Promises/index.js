let pro = new Promise((resolve,reject)=>{
let job = true;
if (job) {
    resolve("Sucessfull")
} else {
    reject("Unsuccessful")
}
})

.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(()=>console.log("Result Completed"))
