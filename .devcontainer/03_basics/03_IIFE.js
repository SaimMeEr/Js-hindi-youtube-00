// imediatellly invoked function expression (IIFE)

(function chai(){    //named IIFE
    console.log(`DB connected`);
  })();
   //in order to avoid the polllution from global scope variables we use IIFE or we can say Within the IIFE, you can define variables and functions without polluting the global scope. 
  
  
  ( () => {           //simple IIFE
    console.log(`DB connected 2`);
  })();
  
  
  ( (name) => {
    console.log(`DB connected 2 ${name}`);
  })("sameer")