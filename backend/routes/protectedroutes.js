const express = require('express');
const fetchUsers = require('../middlewares/fetchUser');
const Test = require('../controllers/Test');
const route = express.Router();

//Get requests
route.get('/',fetchUsers,Test);

//Post requests

module.exports = route ;