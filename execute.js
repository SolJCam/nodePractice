const execute = require('child_process').exec;

execute('ls', (err, stdout)=>{
    //'dir' and not 'ls' for windows

    if(err){

        return err;

    }

    console.log(stdout);  //returns local directory (ls) files 

});