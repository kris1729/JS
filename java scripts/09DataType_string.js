const Name = "raj"
const RepoCount = 20
// try to not use it
console.log(Name + RepoCount + "value") // raj20value 
// morden day (backtick ) string Interpoletion
console.log(`hello my name is ${Name} my repo is ${RepoCount}`)

// Declears string ..

// this string is "objet" data type and get meny index like name[0],name[1], length
// can be seen in  "console"
const name = new String ("raja bhai")
console.log(name[0]) // r
console.log(name.__proto__) // {} --> can be seen in console
console.log(name.length) // 9 

console.log(name.toUpperCase()) // "RAJA BHAI" it is copy not change original one
// at this index which  char is
console.log(name.charAt(2)) // j
// which position
console.log(name.indexOf('a')) // 1
// sliceing
const subStr = name.substring(0,3)
console.log(subStr) // raj -- not include last one
// const substr = name.substring(-1,-3)
// console.log(substr) 

// for remove space start and end 
const str1 = "   raj    ram   "
console.log(str1.trim()) // raj   ram 
// replace..
console.log(str1.replace('raj','sita')) //   sita    ram
// is present or not
console.log(str1.includes('ram')) // true
console.log(str1.includes('raja')) // false

// convert this string in array base on space " "
let str2 = "my name is raj singh"
let strArray = str2.split(' ')
console.log(strArray) // [ 'my', 'name', 'is', 'raj', 'singh' ]

// home work go mdn string mathod..


