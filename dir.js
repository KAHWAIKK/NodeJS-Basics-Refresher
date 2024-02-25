const fs = require('fs')

//make a new directory
fs.mkdir('./newDirectory', (error) => {
    if (error) throw error;
    else {
        console.log('Directory created successfully')
    }
})

//deleting an existing directory

fs.rmdir('./newDirectory', (error) => {
    if (error) throw error;
    else {
        console.log('Directory removed successfully')
    }
})