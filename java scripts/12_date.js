// date =  give single moment in milisecond (01/01/1970)
let myDate = new Date()
//important 
console.log(typeof(myDate))  // OBJECT

console.log(myDate) //2024-01-21T13:26:49.651Z
console.log(myDate.toString()) //Sun Jan 21 2024 18:57:44 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Sun Jan 21 2024
console.log(myDate.toISOString()) //2024-01-21T13:31:16.284Z
console.log(myDate.toJSON()) //2024-01-21T13:31:16.284Z
console.log(myDate.toLocaleString())//21/1/2024, 7:01:16 pm
console.log(myDate.toLocaleDateString())//21/1/2024

//  my date variable
let myCreateDate = new Date (2024,0,23)
console.log(myCreateDate.toLocaleDateString()) // 23/1/2024 (month start with Zero)
//  other mathodmathod 
let myCreateDate2 = new Date (2024,0,23,5,3)
console.log(myCreateDate2.toLocaleString()) // 23/1/2024, 5:03:00 am 

// in form of MM/DD/YYYY or other..
let myCreateDate3 = new Date ("01-05-2024")
console.log(myCreateDate3.toLocaleString()) //5/1/2024, 12:00:00 am
// current time in milisecond
let myTimeStamp = Date.now()
console.log(myTimeStamp) //1705844769198
console.log(myCreateDate.getTime()) //1705948200000
// convert it in second "IMPORTENT"
console.log(Math.floor(Date.now()/1000))//1705844896
let newDate = new Date ()
console.log(newDate.getMonth()) //0 (sunday =0 , jan = 0)
console.log(newDate.getHours()) // 19 (24hour system)
console.log(newDate.getFullYear()) // 2024
// famet can be motified like this..
newDate.toDateString('default',{
    weekday: "long",
    // time zone..
})