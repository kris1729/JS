const arr1 = [1,2]
const arr2 = [4,5]
arr1.push(arr2)  // arr take any data as a single element but not good way..
console.log(arr1) // [ 1, 2, [ 4, 5 ] ]
console.log(arr1[2][1]) // 5   NOT good way 

//so . use concat mathod

const arr3 = [1,2]
const arr4 = [4,5]
console.log(arr3.concat(arr4)) // [ 1, 2, 4, 5 ]
// note it give new array so use sparade mathod

// sparde all 
const arr5 = [1,2]
const arr6 = [4,5]
const newArray = [...arr5, ...arr6]
console.log(newArray) // [ 1, 2, 4, 5 ]

// more nested array then ( use flate )

const arr7 = [1,2,[1,4],[1,2,3,4 ,[1,3,4]]] // depth is 3 
const NewArray  = arr7.flat(Infinity) // Infinity === if Depth
console.log(NewArray) // [ 1, 2, 1, 4, 1, 2, 3, 4, 1, 3, 4 ]


// ask it is aray or convert in array
let variable = "raja"
console.log(Array.isArray(variable)) // false (it is not a array)
let arr9 = Array.from(variable)
console.log(arr9) // [ 'r', 'a', 'j', 'a' ]
// variable = {name:"raja"}
//Important in case of dict we should tell key convert or value  convert otherwise give []


const var1 = 12
const var2 = 123
const var3 = 123445
const nArray = Array.of(var1,var2,var3)
console.log(nArray) // [ 12, 123, 123445 ]

// complete


