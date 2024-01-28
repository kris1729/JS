// two way of making one is "singleton" when use constructor
// Object.create


// and other is "literals"
// object literals

 const mysymbol = Symbol("ghgs")
const user ={
    [mysymbol] : "!@!@" ,  // key as a symbol 
    name:"raja",  //{key : value}  
    age: 18,
    email : "raja@gmail.com",
    isLogin : false

}
// access mathod 

console.log(user.name)  // raja
console.log(user["email"]) //raja@gmail.com
// importent key as a symbol
console.log(user[mysymbol]) // "!@!@"

user["name"] = "raj" // for change object value

// how to fix vlaue
Object.freeze(user)
user['name'] = "anil"
console.log(user["name"]) // raj

