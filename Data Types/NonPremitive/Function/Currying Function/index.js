let curry = (a)=>{
    return (b)=>{
        return(c)=>{
            return a+b+c
        }
        
    }
}
console.log(curry(10)(20)(25));