//express app
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');


const { isLoggedIn, isLoggedOut } = require('./controllers/authController');




const Connection = require('./models/ConnectionsModel');
const User = require('./models/User');

const app = express();
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



const connectionController = require('./Controllers/ConnectionController');
const userController = require('./Controllers/UserController.js');

// listen for requests

mongoose.connect('mongodb://localhost:27017/eventDB', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
    .then((result) => app.listen(8000))
    .catch((err) => console.log(error));

app.use(session({
    secret: 'NBDA',
    resave: false,
    saveUninitialized: false,
}));
app.use(methodOverride('_method'));


app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});


app.get('/', (req, res) => {

    res.render('index', { title: "Home" });


});

app.get('/index', (req, res) => {

    res.redirect('/');


});
app.get('/contact', (req, res) => {

    res.render('contact', { title: "Contact" });


});
app.get('/about', (req, res) => {

    res.render('about', { title: "About us" });


});

// ____________________________Connections______________________________

// get connections
app.get('/connections', connectionController.getAllConnections);

//connection details

app.get('/connection/:id', connectionController.getConnectionDetail);

//Saved Connection

app.get('/connections/SavedConnections', isLoggedIn, connectionController.getSavedConnections);

//Get create new connection page

app.get('/connections/NewConnections', isLoggedIn, connectionController.getConnectionCreate);
//Create new connection
app.post('/NewConnections', isLoggedIn, connectionController.createConnection);
// getRestaurantUpdate

app.get('/connection/:id/update', isLoggedIn, connectionController.getConnectionUpdate);

// updateRestaurant

app.put('/connection/:id', isLoggedIn, connectionController.updateConnection);

// deleteRestaurant
app.delete('/connection/:id', isLoggedIn, connectionController.deleteConnection);


// ______________________________________USERS++++++++++++++++++++++


app.get('/Login', isLoggedOut, userController.getUserLogin);

app.post('/Login', isLoggedOut, userController.postUserLogin);


app.get('/Signup', isLoggedOut, userController.getUserCreate);

app.post('/Signup', isLoggedOut, userController.postUserCreate);

app.get('/logout', isLoggedIn, userController.getUserLogout);

// Saved connections



app.use((req, res) => {
    res.render('error', { title: "404 error" });

})