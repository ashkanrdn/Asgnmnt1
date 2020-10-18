const http = require('http');
const fs = require('fs');
var _ = require('lodash');


const server = http.createServer((req, res) => {
    //loadash

    const num = _.random(0, 20);
    console.log(num);
    const greet = _.once(() => {


        console.log("Hello!");

    });
    greet();
    greet();

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
            path += '/connections.html';
            res.statusCode = 200;
            break;
        case '/detail':
            path += '/connection.html';
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