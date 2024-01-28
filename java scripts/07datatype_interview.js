// JS is  dynamically typed language not have to define type of variable ..
// No of data type ... Official --> Two type (primitive and Non primitive) 
//base on call by value and call by refernce and store in memory
// primitive(7) { string , number , boolean , null , Undefined , symbol , bigint } --> call by value
// Non Primitive (Reference type) { Array , Objects , functions } --> call by reference

// symbol.. (for unique)
const Id = Symbol('123') // symbol(123)
const Id2 = Symbol('123') // symbol(123)
console.log(Id)
console.log(Id2)
console.log(Id === Id2) // false
console.log(typeof(Id)) //symbol

// bigInt {add in last n}
const BigNum = 123456789012363566324n
console.log(typeof(BigNum))  // bigint

// Array..
const arr = [1,"raj",2.5 , true]
console.log(arr) // [1,"raj",2.5 , true]
console.log(arr[2]) // 2.5
console.log(typeof(arr)) // objects(IMPORTENT)

// Objects..
let myobject = {
    Name : "raj",
    age : 12
}
console.log(typeof(myobject)) // object

// function..
const myfxn = function(){
 console.log("hello world")
}
myfxn() // hello world
console.log(typeof(myfxn)) // function --> but known as "Object Function"
console.log(typeof(null)) // Object (IMPORTANT) 
