const express = require('express');
const app = express();



app.use('/use', (req, res)=>{

});

app.get('/', (req, res)=>{

    res.send('<p>This lecture is about node express middleware</p>');


});

app.listen(3000);

console.log('Server is running...');