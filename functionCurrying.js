// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyBytwo = multiply.bind(this, 2);
// multiplyBytwo(5);// will give 10

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);// will give 15


//currying by using closure:-

let multiply = function (x) {

    return function(y){
        console.log(x*y)
    }
}

let multiplyByThree = multiply(3);
multiplyByThree(4)

let multiplyByFour = multiply(4);
multiplyByThree(5)

let multiplyByFive = multiply(5)
multiplyByFive(5)