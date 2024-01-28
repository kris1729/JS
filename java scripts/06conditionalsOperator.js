value1 = 5;
value2  = 4;
console.log(value1>value2)   // true
// do it by your self > , < , <= , >= , == , !=   

// importent..
// use comparision in same data type because result can be false

console.log("2">1) // true result can be worng
console.log("02">1) // true result can be worng

// result can be worng Don't use this type of conversion
console.log(null > 0) // false
console.log(null < 0) // false
console.log(null == 0) // false
console.log(null >=  0) // true  Conversion of null --> 0
console.log( null <= 0) // true   Conversion of null --> 0

// strict cheak (value and datatype)
console.log( 2 == "2" ) // true
console.log ( 2 === "2") // flase


