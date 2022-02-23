var express = require('express');
const { getAll } = require('../controllers/conversation.controller');


var router = express.Router();



/* GET home page. */
router.get('/conversations', getAll);

module.exports = router;
