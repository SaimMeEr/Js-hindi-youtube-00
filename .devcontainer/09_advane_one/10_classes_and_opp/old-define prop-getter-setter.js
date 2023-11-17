

//function base syntax of getter and setter

function user(email,password){
    this._email=email;
    this._password=password
    
    Object.defineProperty(this,'email',{
      get:function(){
        return this._email.toUpperCase()
      },
      set:function(value){
        this._email=value
      }
    })
    Object.defineProperty(this,'password',{
      get:function(){
        return this._password
      },
      set:function(value){
        this._password=value
      }
    })
  }
  const chai=new user("chai@gmail.com",123)
  console.log(chai.email)
  console.log(chai.password)