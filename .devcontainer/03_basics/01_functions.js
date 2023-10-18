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