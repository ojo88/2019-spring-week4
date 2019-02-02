var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lists');
var db = mongoose.connection;

db.on('error', function(msg){
    console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
    console.log('Mongoose connection established');
});

var Quotes = require('../models/quotes');

router.get('/all', function(req, res, next){
    Quotes.find({}).exec(function(err, data){
        res.json(data);
    })
})
module.exports = router;
