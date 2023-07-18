const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const q = new URL(req.url, 'http://localhost:8080');
    const pathname = q.pathname;
    if (pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (pathname === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (pathname === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        fs.readFile('404.html', (err, data) => {
            if (err) throw err;
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
}).listen(8080);