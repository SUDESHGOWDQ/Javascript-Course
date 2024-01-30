// function GrandParent(){
//     console.log("Dada");
//     function Parent(){
//         console.log("Papa");
//         function Child(){
//             console.log("Beta");
//         }
//         Child()
//     }
//     Parent()
// }
// GrandParent()



function GrandParent(){
    console.log("Dada");
    function Parent(){
        console.log("Papa");
        function Child(){
            console.log("Beta");
        }
       return Child
    }
   return Parent
}
GrandParent()()()