//express app 
const express = require('express');
const app = express();
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

// listen for requests 

app.listen(8084);




app.get('/', (req, res) => {

    res.render('index');


});
app.get('/index', (req, res) => {

    res.redirect('/');


});
app.get('/connections', (req, res) => {

    res.render('connections');


});
app.get('/connection', (req, res) => {

    res.render('connection');


});
app.get('/SavedConnections', (req, res) => {

    res.render('SavedConnections');


});
app.get('/contact', (req, res) => {

    res.render('contact');


});
app.get('/about', (req, res) => {

    res.render('about');


});