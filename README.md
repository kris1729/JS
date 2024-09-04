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
console.log(typeof temp) // object
console.log(typeof null) // object
```
boolean

```js
let flag = true
console.log(typeof flag) // boolean
```
undefined

```js
let a
console.log(typeof a) // undefined
console.log(typeof undefined) // undefined

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

