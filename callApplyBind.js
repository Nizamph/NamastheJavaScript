// let name = {
//     firstname: "nizam",
//     lastname: "habeeb",
// }
// let printFullName = function (hometown, state) {
//     console.log(this.firstname +' '+ this.lastname + " from " + hometown+','+state);
// }

// printFullName.call(name, "Thrissur", "kerala");

// let name2 = {
//     firstname: "virat",
//     lastname: "kohli", 
// }

// //function burrowing or call
// printFullName.call(name2, "delhi", "Andipillikav")

// //apply method
// //here we pass second argument as array list
// printFullName.apply(name2, ["delhi", "Andipillikavu"]);

// //bind method
// let printMyname = printFullName.bind(name2, "delhi", "Andipillikav")
// console.log(printMyname)

// printMyname()

let student1 = {
    Firstname : "Nizam",
    Lastname : "habeeb",
    age : 24
}

function PrintStudentDetails(address,rollNo) {
    console.log(this.Firstname+' '+this.Lastname+' age is '+this.age+", address is  "+address+",roll no:- "+rollNo);
}
PrintStudentDetails.call(student1,"pulikkantt", 10)

let student2 = {
    Firstname : "Sharon",
    Lastname : "Tp",
    age : 24
}

PrintStudentDetails.apply(student2,["axvdHome",7])

let student3 = {
    Firstname : "Najma",
    Lastname : "habeeb",
    age : 22
}

let student3Details = PrintStudentDetails.bind(student3,"pulikkanatt",5);

student3Details();






























// let student = {
//     age : 24

// }

// function PrintAgeOfStudent() {
//     console.log(this.age)
// }

// let age = PrintAgeOfStudent.bind(student)

// console.log(age)

// age()
