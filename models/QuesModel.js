var mongoose = require('mongoose');
var quesSchema = new mongoose.Schema({
    question: String,
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
    correctAns: String
});

module.exports = mongoose.model('ques', quesSchema);