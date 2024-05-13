// Dates

let myDate = new Date()

console.log(myDate.toString()); // output = Mon May 13 2024 10:55:05 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // output = Mon May 13 2024

console.log(myDate.toLocaleString()); // output = 13/5/2024, 10:56:10 am

console.log(typeof myDate); // output = object

let myCreatedDate = new Date(2024, 0, 21)

// You can write the Date like (2024, 0, 21 5, 3) or ("2024-01-14") or ("01-14-2024")

console.log(myCreatedDate.toDateString()); // output = Sun Jan 21 2024

// Note = Month starts with '0' in javascript but if you write in DD MM YY syntax it will start with 01

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long" // CTRL + Space
})