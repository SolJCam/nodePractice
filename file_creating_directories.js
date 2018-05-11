const fs = require('fs');

//console.log(fs);      //n.b. this function is asynchronous and won't work without a callback function ex. error handling
if(!fs.exists("views", (err)=>{return err})) {

    //console.log("This is fine");
    fs.mkdir("views", (err)=>{ 

        if (err) return err;

        fs.writeFile("./views/new.html", 'this is a new directory and data', (err)=> {

            if(err) return err;

            console.log('Directory and file saved');

        });

    });

}