var mongoose = require('mongoose');

var schema = mongoose.Schema({
    quote: String,
    author: String,
});

var Quotes = mongoose.model('quotes', schema);

module.exports = Quotes;