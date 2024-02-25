//CUSTOM MODULES AND EXPORT IMPORT OPTIONS

const math = require("./math")


console.log(math.add(2,3))//returns 5


/* Alternative through destructuring */

const { add, subtract, multiply, divide} = require("./math")

console.log(add(8,8))//returns 16
console.log(subtract(8,2))//returns 6
console.log(multiply(8,8))//returns 16
console.log(divide(8,5))//returns 1.6



