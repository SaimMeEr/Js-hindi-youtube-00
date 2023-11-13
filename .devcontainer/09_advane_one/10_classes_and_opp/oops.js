
const user = {
    username: "sameer",
    password: 123,
    signedIn: true,
    
    getUserDetails: function() {
      // console.log("Got user details from database");
      // console.log(`username:${this.username}`)
      console.log(this)
    }
  };
  
  // console.log(user.username);
  // user.getUserDetails();
  // console.log(this)
  
  
  function user(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn
    
    return this
  }
  const userOne = new user("sameer",12,true)
  const userTwo = new user("chaiAurCode",11,false)
  console.log(userOne)
  console.log(userTwo)