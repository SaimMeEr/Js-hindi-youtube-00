// function addTwoNumbers(number1,number2){
//   console.log(number1 + number2)
  
// }
// addTwoNumbers(3,4)

function addTwoNumbers(number1,number2){
    // let result=number1+number2 //=>method 1
    // return result
    
    return number1+number2 //=>method 2
   }
   const result=addTwoNumbers(3,5)
  // console.log("result:",result)
  
  function  loginUserMessage(username){
    if(username===undefined){    //or we can use if(!username){}
      console.log("please enter a username")
      return
    }
    return `${username} just logged in`
  }
  // console.log(loginUserMessage("sam"))
  console.log(loginUserMessage())



  //*******More about Functions*********

  
function calculateCartPrice(val1,val2,...num1){
  return num1
}
// console.log(calculateCartPrice(100,300,400))

const user ={
  username:"sam",
  price:199,
}

function handleobject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user) //this is how we run the object using function and return the value


//***how to run array through a function***
const newArray = [100,200,300,600]

function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(newArray))