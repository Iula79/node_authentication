var express = require('express')
var router = express.Router()
var User = require('../models/user')
var path = require('path');


router.get('/', function (req,res){
    console.log( );
    res.sendFile(path.join(__dirname , '../public/index.html'))
})

module.exports = router;