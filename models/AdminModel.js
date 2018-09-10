var mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
    question: String,
    optionA: Array,
    optionB: Array,
    optionC: String,
    optionD: String,
    correctAns: String
});

module.exports = mongoose.model('ques', adminSchema);