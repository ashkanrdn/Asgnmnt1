//express app 
const express = require('express');
const { getConnections, connectionsList, getConnection } = require('./models/connections');
const app = express();
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

// listen for requests 

app.listen(8000);




app.get('/', (req, res) => {

    res.render('index', { title: "Home" });


});

app.get('/index', (req, res) => {

    res.redirect('/');


});


app.get('/connections', (req, res) => {

    let conListHandler = getConnections();

    res.render('connections', { conListHandler, title: "Connections" });


});



app.get('/connection/:name', (req, res, next) => {

    const paramName = req.params.name;

    let eventhandle = getConnection(paramName);
    console.log(eventhandle);





    if (eventhandle === 'undefined') {
        res.status(404)
        res.render('error', { title: "404 error" });


    } else {

        let eventhandle = getConnection(paramName);

        res.render('connection', { eventhandle, title: " Details of " + eventhandle.conName });


    }



});


app.get('/connection', (req, res) => {
    res.redirect('/connections');
})


app.get('/SavedConnections', (req, res) => {

    res.render('SavedConnections', { title: "Saved connections" });


});
app.get('/contact', (req, res) => {

    res.render('contact', { title: "Contact" });


});
app.get('/about', (req, res) => {

    res.render('about', { title: "About us" });


});


app.use((req, res) => {
    res.render('error', { title: "404 error" });

})