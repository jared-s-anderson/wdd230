const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    let path = './lesson11/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/fish-haven.html':
            path += 'fish-haven.html';
            res.statusCode = 200;
            break;
        case '/gallery.html':
            path += 'gallery.html';
            res.statusCode = 200;
            break;
        case '/preston.html':
            path += 'preston.html';
            res.statusCode = 200;
            break;
        case '/soda-springs.html':
            path += 'soda-springs.html';
            res.statusCode = 200;
            break;
        case '/stormcenter.html':
            path += 'stormcenter.html';
            res.statusCode = 200;
            break;
        case '/thanks.html':
            path += 'thanks.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    
    // sending an HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else{
            //res.write(data);
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});