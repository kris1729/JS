// memory two type one is "stack" and other is "Heap"
// in primitive type "stack" and Non primitive type "Heap" memory
// if stack the get you "copy" if heap the get a "reference" of original value
// stack..
let Name = "raj"
let newname = Name
newname = "raja"
console.log(Name)  // raj means copy sent in newname
console.log(newname) // raja

// heap..

let userOne = {
    email :"userOne@gmail.com",
    upi: "userOne@ybl"
}
let userTwo = userOne
userTwo.email = "userTwo@gmail.com"
userTwo.upi = "userTwoybl"
// both are same due to pass by reference
console.log(userOne.email) // "userTwo@gamil.com"
console.log(userTwo.email) // "userTwo@gmail.com" 

