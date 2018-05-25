const express = require('express');
const app = express();

//here lies middleware: code that can be deployed before the server executes the http request  

// serves up the files in this directory whenever this route is hit whether in the browser or as path in another file   
app.use('/css', express.static(__dirname +'/public'));
        //'next' argument instructs server to move to the next request...
app.use((req, res, next)=>{

    console.log('middleware');

    next();

});


//here ends middleware.
app.get('/', (req, res)=>{

    //res.send('<p>This lecture is about node express middleware</p>');
        
    res.send(`
    <link rel='stylesheet' href='/css/styles.css'>
    <title>Document</title>
</head>
<body>

    <p>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Minus, 
        neque quibusdam quos accusamus accusantium explicabo inventore ad ut tenetur illum libero, 
        molestiae,
        amet sunt voluptas suscipit. Voluptate magnam saepe ex!</p>
    
</body>
</html>
    `);


});

app.listen(3000);

console.log('Server is running...');