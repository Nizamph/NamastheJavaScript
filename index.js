//hoisting in java script

// console.log(x);
// getName()
// var x = 7;
// function getName() {
//     console.log('namaste Java script');
// }


// console.log(getName )
// console.log(x)
// getName()

// function outerfunction() {

//     console.log(a);
    
//     var c = 10;
    
    
//     innerfunction();
    
    
    // function innerfunction() {
    
    // console.log(b);
    
    // console.log(c);
    
    // }
    
    // }
    
    
    // var a = 7;
    
    // var b =3
    
    
    // outerfunction();


    function outerfunction() {

        console.log(a);
        
        var a = 10;
        
        
        innerfunction();
        
        
        function innerfunction() {
        
        console.log(a);
        
        console.log(window.a);
        
        console.log(this.a)
        
        }
        
        }
        
        
        var a = 7;
        
        var b =3
        
        
        outerfunction();