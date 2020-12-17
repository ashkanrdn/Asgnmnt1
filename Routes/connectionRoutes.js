const express = require('express');
const router = express.Router();
const validateEvent = require('../middlewares/validator').validateEvent;
const { isLoggedIn, isLoggedOut } = require('../controllers/authController');
const connectionController = require('../controllers/ConnectionController');



// get connections

router.get('/', connectionController.getAllConnections);

//connection details

router.get('/connection/:id', connectionController.getConnectionDetail);

//Saved Connection

router.get('/SavedConnections', isLoggedIn, connectionController.getSavedConnections);

//Get create new connection page

router.get('/NewConnections', isLoggedIn, connectionController.getConnectionCreate);
//Create new connection
router.post('/NewConnections', isLoggedIn, validateEvent, connectionController.createConnection);
// getRestaurantUpdate

router.get('/connection/:id/update', isLoggedIn, connectionController.getConnectionUpdate);

// updateRestaurant

router.put('/connection/:id', isLoggedIn, validateEvent, connectionController.updateConnection);

// deleteRestaurant
router.delete('/connection/:id', isLoggedIn, connectionController.deleteConnection);




module.exports = router;