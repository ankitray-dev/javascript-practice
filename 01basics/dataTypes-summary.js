// Primitive (call by value)

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100  
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // output = false

const bigNumber = 5154684613543845168461341344n

// Non-Primitive (Reference) (call by reference)

// Array, Objects, Functions

const heros = ["ironman", "blackpanther", "thor"]

let myDescription = {
    name: "Ankit",
    age: 23
}

const myFunction = function() {
    console.log("Hello World");
}


// Type of val

// Undefined = "undefined"
// null = "object"
// Boolean = "boolean"
// Number = "number"
// String = "string"