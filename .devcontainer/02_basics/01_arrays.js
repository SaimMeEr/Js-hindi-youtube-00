//ARRAYS
const myArr = [1,2,3,4]
console.log(myArr)

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1])

//Array methods
myArr.push(6)
myArr.pop() //=>  removes the  last element
myArr.unshift() //=>adds the element before all the elements
myArr.shift() //=>removes the first elements
console.log(myArr)

console.log(myArr.includes())
console.log(myArr.indexOf())

//Splice and Slice

const myArr1=[0,1,2,3,4,5]
console.log("A ", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("b ",myArr)

const myn2 = myArr.splice(1,3) //=> splice method manipulates the original array where slice doesn't
console.log("c ",myArr)
console.log(myn2)