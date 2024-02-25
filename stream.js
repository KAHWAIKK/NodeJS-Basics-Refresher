/* READSTREAMS FOR LARGE FILES */

//Sometimes it is good practiice to read the file in smaller chunks than read the whole file


const fs = require('fs')

//specifying a readable stream
const readStream = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'})


//specifying a writeable stream
const writeStream = fs.createReadStream('./files/new-lorem.txt')


//listening to the data in the readable stream
readStream.on('data', (bigDataChunk) => {
    writeStream(bigDataChunk)
})

