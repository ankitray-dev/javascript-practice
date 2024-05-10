// Stack (primitive), Heap (Non-primitive)

let myName = "ankitray"

let anotherName = myName
anotherName = "ankitraydev"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybi"
}

let userTwo = userOne

userTwo.email = "ankit@google.com"

console.log(userOne.email);
console.log(userTwo.email);