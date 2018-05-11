const fs = require('fs');

try {

    fs.unlinkSync('./newDir/file.js');

    fs.rmdirSync('./newDir'); //doing this synchronously doesn't require a callback function but also slows app as now no other methods can be ran until this is completed.


}catch (err){

    console.log(err + ' (here is the error)');

}









