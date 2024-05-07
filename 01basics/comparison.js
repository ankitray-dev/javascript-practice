console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); // output = true
console.log("02" > 1); // output = true

console.log(null > 0); // output = false
console.log(null == 0); // output = false
console.log(null >= 0); // output = true

// The reason for the above output is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

// In "undefined" you will get false in every case.

