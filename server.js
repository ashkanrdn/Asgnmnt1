const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/plain');

    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();

        } else {


        }
    })

})

//set header

server.listen(3000, 'localhost', () => {
    console.log('listenng');
})