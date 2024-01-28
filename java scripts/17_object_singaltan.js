const user = new Object()
user.id = "123"
user.name = "raja"
console.log(user) //{ id: '123', name: 'raja' }

// nested Object
const user1  =
{
    name : {
        fistname :"raj",
        lastname : "Shingh"
    },
email : "raj@gmail.com"

} 
// access..
console.log(user1.name.fistname) // raj

// merg 
 const user4 = {1:'a',2:'c'}
 const user5 = {3:'d',4:'e'}

//  const obj3 = {user4,user5} problematic like array

// const obj3 = Object.assign(user4,user5) 
const obj3 = Object.assign({},user4,user5) 
console.log(obj3) // { '1': 'a', '2': 'c', '3': 'd', '4': 'e' }

// useable mathod. spradble mathod

const obj4 = {...user4 , ...user5}
console.log(obj4) // { '1': 'a', '2': 'c', '3': 'd', '4': 'e' }
 
