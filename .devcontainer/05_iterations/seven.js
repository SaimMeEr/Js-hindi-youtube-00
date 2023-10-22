//****reduce****

const myNums = [1,2,3]

// const mytotal=myNums.reduce(function(acc,currval){
//   console.log(`acc:${acc} and currval: ${currval}`)
//   return acc+currval
// },0)
// console.log(mytotal)

// const mytotal = myNums.reduce((acc,currval)=>acc + currval,0)
// console.log(mytotal)

const shoppingCart = [
  {
  itemName:"javascript",
  price:2999
},
  {
  itemName:"python",
  price:999
},
  {
  itemName:"javascript",
  price:12999
},

]
const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)