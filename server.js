const http = require('http');

const server = http.createServer((req, res) => {
            //first param: status code (200 = good); 2nd param: Header info (Content-Type 'key' : text/plain || text/html etc 'value') 
    res.writeHead(200, {'Content-Type':'text/html'});

    res.end('<h1>Hi guys, it\'s Sol!</h1>')

});

server.listen(9111);

console.log('Our server is running');