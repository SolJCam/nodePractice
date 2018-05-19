const express = require('express');
let app = express();

//When in production and hosting on another service (ex. Heroku or AWS), the host may configure the process.env.PORT variable to tell your web server what port to listen on; 
//after all, your script runs in their environment.
const port = process.env.PORT || 9999;

app.get('/', (req, res)=>{
    res.send('<h1>Hello World!</h1>');
});

app.get('/api', (req, res)=>{
    //res.send('<h1>Api Page</h1>');
    res.json({name: "Sol"});
});


app.listen(port);

console.log('It\'s working');