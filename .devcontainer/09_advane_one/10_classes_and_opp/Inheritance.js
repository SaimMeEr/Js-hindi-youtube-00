class user{
    constructor(username){
      this.username=username;
    }
    logMe(){
      console.log(`username is ${this.username}`)
    }
  }
  
  class teacher extends user{
    constructor(username,password,email){
      super(username)
      this.password=password;
      this.email=email;
    }
    
    addcourse(){
      console.log(` A new course was added by ${this.username}`)
    }
    
  }
  const chai = new teacher("chai","chai@teacher.com",123)
  chai.addcourse()
  
  const NunChai=new user("NunChai")
  NunChai.logMe()
  
  
  // console.log(chai===teacher)
  console.log(chai instanceof teacher)
  console.log(chai instanceof user)
  