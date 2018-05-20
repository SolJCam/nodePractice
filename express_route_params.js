const express = require('express');

let app = express();


//*MUST have root route established before additional routes can be created**
app.get('/', (req, res)=>{
    res.send('<h1>HOME</h1>');
});

app.get('/post/:id/:category_id', (req, res)=>{
    res.send(`<p>Here is ${req.params.id}</p>\n<p>Here is ${req.params.category_id}</p>`);
});


app.listen(9999);

console.log('It\'s working');