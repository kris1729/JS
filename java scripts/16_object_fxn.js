 user = {
    name:"raj"
 }

 // add new properties
 user.age = 16
 console.log(user)   // { name: 'raj', age: 16 }

 // add new mathod in object
user.greeting = function (){
    console.log("hello brother and sister")
}
console.log(user) // { name: 'raj', age: 16, greeting: [Function (anonymous)] }

// add a paramatric mathod in user
user.welcome = function (){
    console.log(`hello ${this.name}`)
}

// accessing 
console.log(user.welcome) // [Function (anonymous)]
console.log(user.welcome()) // hello raj

//NOTE  for access  use . and [] both 