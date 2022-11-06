// let getA = a => a;

// console.log(getA(1));// give 1

// let square = (a) => {return a*a};

// console.log(square(2))



    
// let a = 8
// let square = () => {return a*a};

// console.log(square())



// let mulitply = (a,b) => {
//     return a*b
// }

// console.log(mulitply(2,3))




// //special cases for arrow 

// //fat arrow doesnt have its own 'this'
// // but it will use its parent's this

// var x = () => {

//     this.val = 1;
//     setTimeout(()=>{
//         this.val++;
//         console.log(this.val)
//     }, 3000)
// }

// x()

// var x = (...n) => {
//     console.log(n[0])// for getting index of the argument
// };


// x(1,2,3)


class Student {
    constructor(name, age, phone_number, board_marks){
        this.name = name
        this.age = age
        this.phone_number = phone_number
        this.board_marks = board_marks
        
    }
  

    SetPlacementAge(req_age){
        return (min_marks) => {
            if(this.board_marks>=min_marks && this.age>=req_age) {
                console.log(`${this.name} is eligible for the placement`)
            }else{
                console.log(`${this.name} is  not eligible for placement`)
            }
        }
    }
}

let Nizam = new Student('nizam', 24, 80394034, 90)
let Sharon = new Student('Sharon', 23, 37857855, 89)
let moshal= new Student('moshal', 21, 3895805, 32)
let raabih = new Student('raabih', 22, 87827874, 21)
let adhil = new Student('adhil', 34, 983493044, 41)

Nizam.SetPlacementAge(18)(60) 
moshal.SetPlacementAge(18)(60)
Sharon.SetPlacementAge(18)(60)
adhil.SetPlacementAge(18)(60)
raabih.SetPlacementAge(18)(60)


