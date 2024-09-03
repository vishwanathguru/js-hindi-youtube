// Primitive

// tatal 7types: String, number, boolearn, null, undifined, symbol, BigInt

// reference (Non premitive)

// Array, Object, Function

const heros = ["ironman", "captainamerica", "spiderman", "hulk", "thor"] 
// [] this is Array 

let myObj = {                   
    name: "vishwanath",  
    age: 32,
}

// {} this is Object


// const myFunction = function () {
    // console.log("Hello World");}

// this is Function(){}


// console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++**++++++++++++++++++++++++++++++++++++++++++++++


// stack (primative),   Heap (non-primative)

let myYoutubenam = "vishwanath@guru.com"
let anotherNmae = myYoutubenam
anotherNmae = "niranjan@guru.com"

// console.log(myYoutubenam)
//console.log(anotherNmae)

let userOne = {
    email: "vishwanath@guru.com",
    upi: "yxz@yty"
}

let userTwo = userOne
userTwo.email = "deepak@yadav.com"

// console.log(userTwo);

console.log(userOne.email);
console.log(userTwo.email);

