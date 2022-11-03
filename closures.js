// different cases of closures 

// case1:-

// function x() {
//     var b = 8;
//    return  y()
//     function y() {

//         var a = 6;
         
//         function z() {

//             console.log(a, b)
//         }
//         return z

//     }
// }


// var z = x();

// z()

//case 2:-

// function abc() {

//     var a = 98;

//     dcb()
//      function dcb() {

//         var b = 89;
//         cba()
//         function cba() {

//             console.log(a,b);
//         }
        
//      }
// }

// var z = abc()
// z //here we will get the result becuase we are not returning anything so we dont need to print anything other than the thing inside the in function
// console.log(z)// will give 98,89 and undefined because we are not returning anything in from the function abc()
// console.log(abc())// here also we will get undefined and result because it is same as like the above one we just write this directly above one is passing to the vasiable and print it

//case 3:-

// function abc() {

//     var a = 98;

//      dcb()
//      function dcb() {   

//         var b = 89;
        
//         function cba() {

//             console.log(a,b);
//         }
//         return cba
        
        
//      }
// }

// var z = abc()

// console.log(z)

// z()// here what happens is we are returning cba from dcb() function but from abc() we are not returning anything 

function x(){

    let a = 10;
    
    function y(){
    
    console.log(a);
     
    }
    
    a= 50;
    
    return y;
    
    }
    
    
    const z = x()
    
    console.log(z());
