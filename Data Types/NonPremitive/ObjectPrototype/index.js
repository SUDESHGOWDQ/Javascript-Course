function stu (sName,Sage){
    this.name = sName
    this.age = Sage
}
stu.prototype.gender = "Male"
let s1 = new stu("Suraj",18)
console.log(s1);
console.log(stu.prototype);
console.log(s1.prototype);