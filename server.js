const http = require('http');
const fs = require('fs');
const { RSA_NO_PADDING } = require('constants');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //Set Header
    res.setHeader('Content-Type', 'text/plain');

    //Define Path and Switch


    let path = './Views';
    switch (req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/connections':
            path += '/connections1.html';
            res.statusCode = 200;
            break;
        case '/detail':
            path += '/ConnectionDetails.html';
            res.statusCode = 200;
            break;
        default:
            path += '/savedconnections.html';
            res.statusCode = 404;
            break;

    }



    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);

            res.end();

        } else {
            res.end(data);



        }
    })

})

//set header

server.listen(3000, 'localhost', () => {
    console.log('listenng');
})