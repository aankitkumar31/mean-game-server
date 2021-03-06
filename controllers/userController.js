var mongoose = require("mongoose");
var express = require('express');
var url = require('url');
var router = express.Router();
var UserModel = require('../models/UserModel');
var QuesModel = require('../models/QuesModel');

// save user information
router.post('/saveUser', function (req, res, next) {
    var userModel = new UserModel(req.body);
    userModel.save(function (err,data) {
        console.log(data);
        if (err) {
            console.log(err);
        } else {
            res.send({ message: "saved",dataId : data['_id'] })
        }
    });
});

// save questions added by admin
router.post('/saveQues', function (req, res, next) {
    var quesModel = new QuesModel(req.body);
    quesModel.save(function (err,data) {
        console.log(data);
        if (err) {
            console.log(err);
        } else {
            res.send({ message: "saved" })
        }
    });
});

// retreive all questions
router.get('/getQues', function (req, res, next) {
    QuesModel.find({},function (err, data) {  
        if (err) {
            res.status(404).send(err);
            return;
        }        
        res.send(data);
    });
});

// update user detail quiz details
router.put('/updateUser', function (req, res, next) {
    UserModel.update({ '_id': req.body._id }, {
        '$set': {
            correctAns: req.body.correctAns,
            incorrectAns: req.body.incorrectAns,
            score: req.body.score,
        }
    }, function (err, doc) {
        if (err) {
            res.status(404).send(err);
            return;
        }
        res.status(200).send({ message: "updated",id : req.body._id })
    })
});

// get quiz result 
router.post('/getResult', function (req, res, next) {
    console.log(req.body);
    UserModel.find({ '_id': req.body.id },function (err, data) {  
        if (err) {
            res.status(404).send(err);
            return;
        }        
        res.send(data);
    });
});

// to test the api
router.get('/test', function (req, res, next) {
    console.log('api is running');
    res.send('Api is running');
});

module.exports = router;
