const fs = require('fs');  //fs = file system

fs.readdir('./', (err, content)=>{

    if(err) return err

    console.log(content);

})

fs.readFile('global.html', 'UTF-8', (err, content)=>{
    //UTF-8 encoding for readability as oopposed to buffer return which is the same data in binary format

    console.log(content);

})