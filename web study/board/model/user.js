var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    school : String

});

module.exports = mongoose.Schema('user', userSchema);