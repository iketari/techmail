// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContestSchema   = new Schema({
    title: String,
    dateFrom: { type: Date, default: Date.now },
    dateDue: { type: Date, default: Date.now },
    user: String,
    hash: String
}, {versionKey: false });

module.exports = mongoose.model('Contest', ContestSchema);