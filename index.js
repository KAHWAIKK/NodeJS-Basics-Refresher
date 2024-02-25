const fs = require("fs");


fs.readFile('./files/start.txt',(error, data) => {
    if (error) throw error;
    else {
        console.log(data);
        //returns a buffer data, for us to read that data we need to put it toString()
        //<Buffer 27 48 65 6c 6c 6f 20 6d 79 20 6e 61 6d 65 20 69 73 20 4b 65 76 69 6e 27> 
        console.log(data.toString());
        //'Hello my name is Kevin'
    }
})

/* Encoding using utf8 parameter */

fs.readFile('./files/start.txt','utf-8',(error, data) => {
    if (error) throw error;
    else {
        console.log(data);
          //'Hello my name is Kevin'
    }
})

/* Function to handle any uncaught error */

process.on('uncaughtException', error => {
    console.log(`There was an uncaught error: ${error}`);
    //There was an uncaught error: ReferenceError: error is not defined
    process.exit(1);
})

/* Alternative means to read a file */

const path = require('path');

fs.readFile(path.join(__dirname,/* directory name */ 'files',/* name of file to read from */ 'start.txt'), 'utf8', (error,data) => {
    if (error) throw error;
    else {
        console.log(data);
          //'Hello my name is Kevin'
    }
});

/* WRITE FILE USING NODEJS */

fs.writeFile(path.join(__dirname,/* directory name where the file will be created */ 'files',/* name of file to write to */ 'reply.txt'),/* content we are going to write in the file */ 'I have already been written',(error) => {
    if (error) throw error;
    else {
        console.log('Write complete');
          //Write complete
    }
});


console.log('I want to show you nodeJs is asynchronous in nature');
/* UPDATE FILE USING FS */

fs.appendFile(path.join(__dirname,/* directory name where the file will be created if it doesnt exist */ 'files',/* name of file to update to */ 'update.txt'),/* content we are going to update in the file */ 'appending text',(error) => {
    if (error) throw error;
    else {
        console.log('Append complete');
          //Append complete
    }
});


/* PROMISES WITH ASYNC/AWAIT */


