//for-of loop

let arr = [1,2,3,4,5]
for(const num of arr){
  // console.log(arr)
}
  
const greetings = "hello world"
for(const greet of greetings){
  // console.log(`Each char is ${greet}`)

}

//Maps
const map=new Map() 

map.set('IN',"india")
map.set('USA',"united states of america")
map.set('Fr',"france")
// console.log(map)

for( const [key,value] of map)
// console.log(key , ':-',  "value") //maps are iterable through for-of loop while objects are not


// // const myobj = {
//   js : "javascript",
//   cpp :"c plus plus",
//   rb : "ruby",
//   swift : "swift by apple"
// }
// for (const key in myobj) {
//   // console.log(`${key} shortcut is for ${myobj[key]}`);
// }

var programmming = ["js","rb","cp","java"]
for (var keys in programmming) {
  // console.log(programmming[keys])
  console.log(keys)
}
