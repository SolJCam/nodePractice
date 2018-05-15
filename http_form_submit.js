const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{

    let body = '';

    if(req.method === 'GET'){
        //console.log(req.method);
        res.writeHead(200, {'Content-Type': 'text/html'});
        //file system reads file and returns it to server as 'data' which is then sent via 'res' to browser
        fs.readFile('./http-form.html', 'UTF-8', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(req.method === 'POST'){

        req.on('data', data => {
            body+= data;
        });

        req.on('end', ()=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(body, ()=>{
                res.end();
            });
        })
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 ERROR could not find what you were looking for');
    }
}).listen(9111);

console.log('it\'s working');