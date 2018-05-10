const fs = require('fs');


//generates the file data.html in the directory modules w/ the below string (utf8 encoding). Call back function for error handling.
fs.writeFile('./modules/data.html', 'Hello this file has just been created', 'utf8', (err)=>{

    if(err) return err;

    console.log("The file has been saved");

});


fs.appendFile('./modules/data.html', 'Hello this file has just been created', 'utf8', (err)=>{

    if(err) return err;

    console.log("The file has been saved");

});