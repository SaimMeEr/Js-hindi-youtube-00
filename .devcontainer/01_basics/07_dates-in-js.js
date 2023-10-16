//Dates

let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23) //=>format-1

// let myCreatedDate = new Date(2023,0,23,5,3,44) //=>format-2
// let myCreatedDate = new Date("2023-01-14")        //=>format=>yy-mm-dd
// let myCreatedDate = new Date("01-04-2023")     //=>format=>dd-mm-yy
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=  Date.now()

// console.log(myCreatedDate.getTime())
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDate())
console.log(newDate.getDay())

// `${newDate.getDate()} and the time is 4`  =>stringinteplation in order to get full date and time