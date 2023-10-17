 //SingleTon objects

// const tinderUser= new Object() //=>this is how we declare SingleTon object

const tinderUser={}

// tinderUser.id="123abc"
// tinderUser.name="sam"
// tinderUser.IsLoggedIn=false,
 
// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  full_name: {
    userfullname: {
    firstName:"sameer",
    LastName:"Ahmad",
  }
  }
}
  // console.log(regularUser.full_name.userfullname.firstName)
  
  //=> how to merge objects
  
  const obj1 = {1:"a" , 2:"b"}
  const obj2 = {3:"a" , 4:"b"}
  const obj3 = {5:"a" , 6:"b"}
  
//   const obj4 = Object.assign({} ,obj1,obj2,obj3)
  
  const obj4 = {...obj1, ...obj2, ...obj3}// 
  // console.log(obj4)
  
  console.log(tinderUser)
  
  console.log(Object.keys(tinderUser))
  console.log(Object.values(tinderUser))
  
  console.log(tinderUser.hasOwnProperty("IsLoggedIn"))
  console.log(tinderUser.hasOwnProperty("IsLogged"))  
  