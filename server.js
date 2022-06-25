const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Log message to console when a request comes in
    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'text/html');
    
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default: 
            path += '404.html';
            break;
    }
        
    // Send an html file
    // 'data' arg passes in the contents of the read file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening to requests on port 3000');
});
