const express = require('express');

let app = express();

app.get('/post/:id/:category_id', (req, res)=>{
    res.send('<p>Here is ${req.params.id}</p>');
});


app.listen(9999);

console.log('It\'s working');