//iterate through the objects

// var obj = {
//     key1 : 1,
//     key2 : 2,
//     key3 : 3
// }



//for accessing  the keys:-
//object.keys(obj)

// Object.keys(obj).forEach(key =>{
//     console.log(obj[key])
// })



var cars = {
    car1 : "bmw",
    car2 : "ferrari",
    car3 : "audi",
    car4 : "lamborgini"
}

//Object.keys(cars):- we are accessing all the keys inside the object cars

Object.keys(cars).forEach(key => {
    console.log(cars[key])//here we printing each key
})


