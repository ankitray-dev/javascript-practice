// ************** Nums ***************** //

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // output = 3
console.log(balance.toFixed(2)); // output = 100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); // output = 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // if you leave the bracket empty then it will show in US standards so to show in Indian standard you have to add 'en-IN'


// ***************** Maths ***************** //


console.log(Math); // output = Object [Math]

console.log(Math.abs(-4)); // output = 4

console.log(Math.round(4.6)); // Output = 5

console.log(Math.ceil(4.2)); // Output = 5

console.log(Math.floor(4.9)); // Output = 4

console.log(Math.min(2, 4, 6, 8)); // Output = 2

console.log(Math.max(2, 4, 6, 8)); // Output = 8

console.log(Math.random());

console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) // Important formula remember it