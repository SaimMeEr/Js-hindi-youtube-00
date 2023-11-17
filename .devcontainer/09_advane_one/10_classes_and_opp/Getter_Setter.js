class user{
    constructor(email,password){
      this.email=email;
      this.password=password;
    }
    
    get email(){
      return this._email.toUpperCase()
    }
    set email(value){
      this._email=value
    }
    
    get password(){
      return `${this._password}sameer`
    }
    
    set password(value){
      this._password=value
    }
  }
  const sameer=new user("s@sameer.ai",123)
  // console.log(sameer.password)
  console.log(sameer.email)