const express = require('express');
const route = express.Router();

//Get requests
route.get('/',(req,res)=>{
    res.send('Test API')
})



//Post requests



module.exports = route ;