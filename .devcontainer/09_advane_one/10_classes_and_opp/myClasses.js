// ES^6


// class user{
//   constructor(username,Email,password){
//     this.username=username;
//     this.Email=Email;
//     this.password=password
//   }
// }
// const chai=new user("chai","chai@gmail.com",123)
// console.log(chai)


// class user{
//   constructor(username,Email,password){
//     this.username=username;
//     this.Email=Email;
//     this.password=password
//   }
//   encryptPassword(){
//     return `${this.password}abc`
//   }
//   changeUser(){
//     return `${this.username.toUpperCase()}`
//   }
// }
// const chai=new user("chai","chai@gmail.com",123)
// console.log(chai.encryptPassword())
// console.log(chai.changeUser())



// Behind the scenes =->if we don't have class syntax

function user(username,Email,password){
    this.username=username;
  this.Email=Email;
  this.password=password
}
user.prototype.encryptPassword= function(){
return `${this.password}abc`
}
user.prototype.changeUser= function(){
return `${this.username.toUpperCase()}`
}


const Tea=new user("Tea","Tea@gmail.com",123)
console.log(Tea.encryptPassword())
console.log(Tea.changeUser())