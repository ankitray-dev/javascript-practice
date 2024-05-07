// ***************** Conversions ****************** //

let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

console.log(valueInNumber)
console.log(typeof valueInNumber)

// If score = "undefined" then the output = NaN(Not a Number)
// If score = "null" then the output = 0
// If score = "33abc" then the output = NaN(Not a Number)
// If score = "true/false" then the output = 1/0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// If isLoggedIn = 1/0 then the output = true/false
// If isLoggedIn = "" then the output = false
// If isLoggedIn = "ankit" then the output = true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ***************** Operations ****************** // 

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " ankit"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // output = 12
console.log(1 + "2"); // output = 12
console.log("1" + 2 + 2); // output = 122
console.log(1 + 2 + "2"); // output = 32

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);