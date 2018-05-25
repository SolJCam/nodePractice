const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use('/assets', express.static(__dirname +'/public'));
        
app.use((req, res, next)=>{

    console.log('middleware');

    next();

});

app.listen(3000);

console.log('Server is running...');