
// {
//     {
//         {
//             {  
//                 var a = 5
//                 console.log(a)

//             }
//         }
//     }
// }
// console.log(a)


function scope(){
    {
        {
            {  
                var a = 5
                console.log(a)

            }
        }
    }
}
scope()
console.log(a)

function scope(){
    
    {
        {
            {  
                var a = 5
                console.log(a)

            }
        }
    }
}
console.log(a)
scope()
