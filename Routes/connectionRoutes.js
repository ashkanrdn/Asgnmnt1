const express = require('express');
const router = express.Router();

const connectionController = require('../controllers/ConnectionController');

// 1-1
router.get('/', connectionController.getAllConnections);
// 1-2
router.post('/', connectionController.createConnections);
// 2
router.get('/:id', connectionController.getConnectionsDetail);

// 3
router.get('/NewConnections', connectionController.getConnectionsCreate);

// 3-1
router.post('/', connectionController.createConnection);

// 4

router.get('/:id/update', connectionController.getConnectionsUpdate);

router.put('/:id', connectionController.updateConnection);

router.delete('/:id', connectionController.deleteConnection);

module.exports = router;