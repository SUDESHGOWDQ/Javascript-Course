console.log("start");
var a = 10;
function x(){
    var b= 20;
    console.log(b);
    function y(){
        console.log(a);
    }
    return y
}
x()()
console.log("end");