const score = 100 // defalt data type is number
// strict number date type 
const balance = new Number (30) // 100% number data type can be perform some mathods
const balanceStr = balance.toString(); // type is string and apply all string mathod

// fixed digits after desimal point..
console.log(balance.toFixed(3)) // 30.000

// imp consets 
const num2 = 123.845
console.log(num2.toPrecision(3)) //124  (data Type is "STRING")
console.log(num2.toPrecision(2)) // 1.2e+2
const num3 = 3.89
console.log(num3.toPrecision(2)) // 3.9

let num4 = 12002030
console.log(num4.toLocaleString()) // 1,20,02,030 (IN USA NUMBER SYSTEM)
// for indian
console.log(num4.toLocaleString('en-IN')) //1,20,02,030
console.log(Number.MIN_VALUE) //5e-324
console.log(Number.MAX_VALUE) //1.7976931348623157e+308






