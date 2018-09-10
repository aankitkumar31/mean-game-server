var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: String,
    correctAns: String,
    incorrectAns: String,
    score : String
});

module.exports = mongoose.model('users', userSchema);