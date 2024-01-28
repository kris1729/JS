let score = "33"
let score1 = null
console.log(typeof(score))
// type conversion..
const scoreNum = Number(score)
const scoreNum1 = Number(score1)
console.log(typeof score ) // convert into (number) it fixed but see the output number can be differ
console.log(scoreNum)    // NOTE.. it can be differ (NaN)
console.log(scoreNum1)   // it can be differ (0)

let boolvalue = 2
let ConBoolvalue = Boolean(boolvalue)
console.log(ConBoolvalue)  // true
// Boolean(1) ==> true
// Boolean("suraj") ==> true
// Boolean("") ==> false 

// convert in string..

let Num = 123
let strinhNum = String(Num);
console.log(strinhNum) // 123
console.log(typeof(strinhNum))  // string

