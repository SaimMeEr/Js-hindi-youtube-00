const user ={
    username:"sameer",
    price: 999,
    
    welcomeMessage:function(){
    console.log(`${this.username},welcome to the website`)
    // console.log(this)
    }
    
  }
  // user.welcomeMessage()
  // user.username="sam"
  // user.welcomeMessage()
  
  // console.log(this)
  
  
  //**********Arrow functions*********
  
  const addTwo=(num1,num2) => {
    return num1+num2
  }                             //this  is basic arrow function
  // console.log(addTwo(3,4))
  
  
  const addTwo1=(num1,num2) => num1+num2
      // console.log(addTwo1(3,4))   //this is implicit return arrow function
  
  const addTwo2=(num1,num2) => (num1+num2)
  console.log(addTwo2(3,4))