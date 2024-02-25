/* PROMISES WITH ASYNC/AWAIT */

const fsPromises = require('fs').promises
const path = require('path');


const fileSystemOperations = async () => {
    try {
        /* readFile Promise */
        const data = await fsPromises.readFile(path.join(__dirname,/* directory name */ 'files',/* name of file to read from */ 'start.txt'),'utf8' )
        console.log(data)
        //'Hello my name is Kevin'

        await fsPromises.unlink(path.join(__dirname,/* directory name*/  'files' ,'start.txt'))
        //deletes the start.txt file

        //writeFile Promise
        await fsPromises.writeFile(path.join(__dirname,/* directory name */ 'files',/* name of file to write to */ 'promiseWrite.txt'), /* content to write */'I am a writeFile promise')

        //append file promise
        await fsPromises.appendFile(path.join(__dirname,/* directory name */ 'files',/* name of file to update  to */ 'promiseAppend.txt'), /* content to append */'I am a appendedFile promise')

        //rename file promise
        await fsPromises.rename(path.join(__dirname,/* directory name */ 'files',/* name of file to rename  from */ 'promiseAppend.txt'),(path.join(__dirname,/* directory name */ 'files',/* name of file to rename  to */ 'promiseRename.txt')))

        /* readFile Promise again */
        const newData = await fsPromises.readFile(path.join(__dirname,/* directory name */ 'files',/* name of file to read from */ 'promiseRename.txt'),'utf8' )
        console.log(newData)
    }catch(err) {
        console.log(err)
    }
}

//calling the fileSystemOperations function
fileSystemOperations();//returns I am a appendedFile promise