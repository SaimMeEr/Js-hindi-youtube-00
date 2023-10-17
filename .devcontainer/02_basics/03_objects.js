//Object literals

const mySym = Symbol("key1") //=>this how we declare symblos and add it into Object

let JsUser = {
  name:"sameer",
  "full_name":"sameer ahmad mir",
  [mySym]:"mykey1",
  email:"mirsameer32@google.com",
  age:18,
  location:"srinagr",
  IsLoggedIn:false,
  lastLoginDays:["Monday","tuesday","Wednesday"]
  
}
// console.log(JsUser.name)
// console.log(JsUser["full_name"]) 
// console.log(JsUser["name"]) //=> this method should be used
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "sameer21@chatGpt.com" //=> this is how we overwrite things
// Object.freeze(JsUser) //=> this is how we freeze the things or simply values
JsUser.email = "sameer31@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
  console.log("hello JsUser")
}
JsUser.greetingTwo = function(){
  console.log(`hello JsUser,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())