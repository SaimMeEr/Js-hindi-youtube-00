const name = "sameer"
const repoCount = 20

// console.log(name + repoCount);

// console.log(` Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('candy-dy-com')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
// console.log(newString);

const newString1 = "  sameer  "
console.log(newString1);
console.log(newString1.trim());


const url = "https://sameer.com/sameer%20Mir"

console.log(url.replace('%20', '40'))
console.log(url.includes('tanzeel'));
console.log(url.includes('sameer'));

console.log(gameName.split('-'))