# Javascripts learning basic to advanced

> # check data type
number,range of number data type is 2^53
```js
 let age = 12
console.log( typeof age); // number
```
string 

```js
let name = 'anil'; // "anil"
console.log(typeof name ) // string
```
null

```js
let temp = null
console.log(typeof temp , typeof null) // object object
```
boolean

```js
let flag = true
console.log(typeof flag) // boolean
```
undefined

```js
let a
console.log(typeof a , typeof undefined) // undefined  undefined
```
> # 02 Type conversion

string to number

```js
let a = "121"
console.log(typeof a , a + 333 , a + "55") // string  121333 12155 

let b = Number(a);
console.log(typeof b , b + 2000 , b + '2000')  //  number 2121 1212000 
// answer can be differ

let c = Boolean(a)
console.log(typeof c , c ) //boolean true
a = ""
c = Boolean(a);
console.log(typeof c , c ) // boolean false

```
Number to string , boolean 

```js
let a = 123
console.log(a+'raj', typeof a) // 123raj nuumber

let b = String(a);
console.log( typeof b , b + 'suraj') //  string 123suraj

let c = Boolean(a);
console.log(typeof c, c) // boolean true
a =0
c = Boolean(a);
console.log(typeof c, c) // boolean false

```
null (object) to string , number , boolean

```js
let a = null

let b = String(a)
console.log(typeof b ,b, b+'raj' ) // string null nullraj

let c = Number(a)
console.log(typeof c , c , c+12)  // number 0 12

let d = Boolean(a)
console.log(typeof d , d) //boolean false 
```

> # 03  Operation  
neg , add , mul ,sub , divide  , squre , mod
```js
let a = 3,b = 5
console.log(-a,a+b,a*b,a-b,b/a,a**b,b%a) // -3 8 15 -2 1.6666666666666667 243 2
```
string addition

```js
let a= "raj"
let b = "yadav"
let c = a +" "+ b; 
console.log(c) // raj yadav
```
something Important (code exucute left side)
```js
let a = "1" + '2'
console.log(typeof a , a) // string 12

let b = "1" + 2 + '1'
console.log(typeof b , b)  // string 121

let c = "1" + 2 + 2 + 120*2 
console.log(typeof c , c)  //string 122240

let d = 3*3 + 3 + 2 + "999"
console.log(typeof d , d); // string 14999
```

> NOT USE THIS TYPE OF CODE
```js
console.log(true, +true , -true ) // true 1 -1
console.log(+"", -"") // 0 -0

let a , b, c 
a = b = c = 2 + 2 
console.log(a,b,c) // 4 4 4
```
> read about ++a, a++, --a, a--, += , -= , *= , **=

> # 04 Conditional Operator
```js
a = 5;
b  = 4;
console.log(a>b,a<b,a>=b,a<=b,a==b,a!=b)  // true false true false false true 
```
> strict check (Value and DataType Both)
```js
console.log( 2 == "2" , 2 === "2" ) // true  false 
```
> Don't Use 
```js
console.log("2" > 1, "02" > 1); // true true

console.log(null > 0, null < 0, null == 0); // false false false

console.log(null >= 0, null <= 0); // true true
// conversion of null into 0
```
> # 05 DATATYPE INTERVIEW QUESTION
### JS is DYNAMIC Type Language
in which no need to define DataType before
decleration
### Number Of DataType
1. officaly , call by value and call by reference 
> Officialy ,
1. Primitive -> (7)
**string , number , boolean , null , Undefined , symbol , bigint**
Call by Value

2. Non Primitive -> (Reference Type)
**Array , Objects , functions**
Call by Reference 









