//for 

for(let i=0;i<=10;i++){
    let element = i;
    if(element==5){
      // console.log("5 is best number")
    }
    // console.log(element)
      
    }
    // console.log()
     
    
    for (let  i =1 ; i <=10; i++) {
      // console.log(`outer loop value is: ${i}`)
    
    for (let j = 1; j <=10; j++) {
      // console.log(`inner loop value ${j} and outer lopp value ${i}`)
      // console.log(i + "*" + j + "=" + i*j)
    }
    }
    
    let myArray=["flash","batman","superman"]
    for (var index = 0; index < myArray.length; index++) {
      const element=index;
      // console.log(myArray)
    }
    
    
    //Break and continue
    
    // for ( let index = 1; index <10; index++) {
    //   if(index==5){
    //     console.log("5 is detected")
    //     break;
    //   }
    //   console.log(`value of i is: ${index}`)
    // }
    
    for ( let index = 1; index <=20; index++) {
      if(index==5){
        console.log("5 is detected")
        continue;
      }
      console.log(`value of i is: ${index}`)
    }
    
    