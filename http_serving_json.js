const http = require('http');
const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((req, serverRes) => {

        //http.createServer outgoing msg
    //console.log(serverRes);
        //http.createServer incoming msg
    //console.log(req);

    if(req.method === 'GET' && req.url === '/posts'){
        https.get(url, (httpRes)=>{
            httpRes.on('data', data => {
                httpRes.setEncoding('utf8');
                //console.log(data);
                serverRes.write(data);
            });

                //'end' event keyword: runs at completion of 'data' event; ends 'resp' NOT connection
            httpRes.on('end', ()=>{
                serverRes.end();
                //console.log('its over')
            });
        })
    }else{
        serverRes.writeHead(404, {'Content-Type': 'text/plain'});
        serverRes.end('404 ERROR, could not find what you were looking for');
    }


}).listen(4444);

console.log('Server is listening on PORT 4444');