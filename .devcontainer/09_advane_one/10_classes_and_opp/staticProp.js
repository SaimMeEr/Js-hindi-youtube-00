class user{
    constructor(username){
      this.username=username
    }
    logMe(){
      console.log(`Username:${this.Username}`)
    }
    static createId(){
      return `123`
    }
  }
  const sameer = new user("sameer")
  // console.log(sameer.createId())
  
  class teacher extends user{
    constructor(username,email){
      super(username)
      this.email
    }
  }
  const Mi= new teacher("redmi","redmi@gmail.com")
  console.log(Mi.createId())