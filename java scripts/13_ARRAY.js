// array object type.. dynamic(resizable) , multi dataType , index..[0],[1]
// IMPORTANT...
// it makes  "shallow copy"  (same  reference point ) not "Deep copy" (pass by value)  
let myArry = [1,2,3,5,4,3]
let myHero = ["saktiman","hatim"]

// other mathod to create array
let Myarray2 = new Array(1,2,3,2,3)
console.log(Myarray2[2]) // 3

// Mathods
Myarray2.push(12) // add in last
Myarray2.push(13) 
Myarray2.pop() // remove form last
console.log(Myarray2) //[ 1, 2, 3, 2, 3, 12 ]

// for adding starting
Myarray2.unshift(0)
console.log(Myarray2) // [0,1,2,3,2,3,12]

// removing from first 
Myarray2.shift()
console.log(Myarray2) // [1,2,3,2,3,12]

// for question (true/false)

console.log(Myarray2.includes(12)) //  (true)  if 12 exist then ans is True else False
console.log(Myarray2.indexOf(12)) //   (5)    give the index of 12
console.log(Myarray2.indexOf(13)) //  (-1)    13 is not present in myarray2
 
let myarray2 = [1,2,3,3,2,3,2]
let newArray = myarray2.join()   // convert all value into 1 single string  
console.log(newArray)  // ("1,2,3,3,2,3,2") it is in string from

// slice and splice (IMPORTANT) different between both

console.log("a-->",myarray2) // a--> [1,2,3,3,2,3,2]
const arr1 = Myarray2.slice(2,5) //take index 2,3 4 only not 5 
console.log(arr1) // [ 3, 2, 3 ]
console.log("b-->",myarray2) // b--> [1,2,3,3,2,3,2]

// note orignal array will change by using splice
const arr2 = myarray2.splice(2,4) // start to index 2 after this take 4 elemnet in arr2 BUT myarray2 has changed
console.log(arr2) // [3,3,2,3]
console.log("c-->",myarray2) // [1,2,2]

   







