const name2 = "test"
console.log(name2)


console.log(global)

/* IMPORTING CORE MODULES */

const os = require("os")
const path = require("path")



console.log(os.arch())//prints out the arch object
console.log(os.version())//prints x64 the os nversion
console.log(os.homedir())//prints C:\Users\User
console.log(os.homedir())//prints C:\Users\User

console.log(__dirname)//prints out  E:\NODEJS\Basics1
console.log(__filename)//prints E:\NODEJS\Basics1\server2.js


console.log(path.parse(__filename))// prints the object
/* {
    root: 'E:\\',
    dir: 'E:\\NODEJS\\Basics1',
    base: 'server2.js',
    ext: '.js',
    name: 'server2'
  } */
console.log(path.parse(__dirname))//prnts the object of the directory
/* {
    root: 'E:\\',
    dir: 'E:\\NODEJS',
    base: 'Basics1',
    ext: '',
    name: 'Basics1'
  } */




    