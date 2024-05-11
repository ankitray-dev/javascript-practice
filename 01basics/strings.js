const name = "Ankit"
const repoCount = 10

console.log(name + repoCount); // Not preferable

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is called string interpolation

const gameName = new String("Lelopudina")

console.log(typeof gameName); // output = object

console.log(gameName[0]);

// There are many methods in string these are few examples of it

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));

console.log(gameName.indexOf('u'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    ankit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ankit.com/ankitray%20dev"

console.log(url.replace('%20', '-'));

console.log(url.includes('ankit'));

console.log(gameName.split(separator, limit));