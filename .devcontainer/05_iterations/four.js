//for-Each

const coding = ["js","ruby","python","cpp","java"]
// coding.forEach(function(item){
//   console.log(item)
// })

coding.forEach((item)=>{
  // console.log(item)
})


coding.forEach((item,index,arr)=>{  //forEach also accesing the index and array properties
  // console.log(item,index,arr)
})

const mycoding=[
  {
    languageName:"javascript",
    languageFile:"js"
    },  
    
  {
    languageName:"java",
    languageFile:"java"
    },
    
  {
    languageName:"python",
    languageFile:"py"
    },
    
    ]
    mycoding.forEach((item)=>{
      // console.log(item.languageName)
      console.log(item.languageFile)
    })