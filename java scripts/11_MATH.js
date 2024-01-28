console.log(Math)//[Math]{} object
// in console can be  seen meny more..
console.log(Math.abs(-4)) // 4
console.log(Math.round(5.62)) // 6
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(7.73)) // 7
console.log(Math.min(4,9,3,2)) //2
console.log(Math.random()) // [0,1] always
console.log(Math.round(Math.random()*10) +1) // [1,11] always

// how to define in in between [min,max)
const min = 10
const max = 20
const num = Math.floor(Math.random()*(max-min+1)+min)
console.log(num) //[min,max)



