const http = require('http');
const dt = require('./myfirstmodule');
const URL = require('url');
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const myEventHandler = () => {
    console.log('I hear a scream!');
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');

// 

// fs.appendFile('mynewfile1.txt', 'Hello content!', (err) => {
//     if (err) throw err;
//     console.log('Saved!');
// })

// fs.open('mynewfile2.txt', 'w', (err, file) => {
//     if (err) throw err;
//     console.log("Saved with fs.open!")
// })

// fs.writeFile('mynewfile3.txt', 'Hello content!', (err) => {
//     if (err) throw err;
//     console.log('Saved with fs.writeFile!');
// })

// fs.writeFile('mynewfile1.txt', 'This is my new text!', (err) => {
//     if (err) throw err;
//     console.log('Updated!');
// })

// fs.unlink('mynewfile2.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
// })

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
//     if (err) throw err;
//     console.log('File Renamed!');
// })

http.createServer((req, res) => {
    // res.write("The date and time are currently: " + dt.myDateTime() +'\n');
    // res.write(req.url + '\n');
    // const q = URL.parse(req.url, true).query;
    // const txt = q.year + " " + q.month;
    // res.end(txt);
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        res.write(data);
        return res.end();

    })
}).listen(8080);

