const marvel_heros = ["thor","ironman","spider"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) 

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const another_array = [4,3,2,[1,2,3],7,[6,7,[3,4,5]]]
const real_another_array = another_array.flat(Infinity)  //=> .flat() method makes the various subarrays into recursively one array
// console.log(real_another_array)

let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3))  //=> .of() method return a new array from set of elements

