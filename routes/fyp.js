var express = require('express');
var router = express.Router();
const FYPModel = require('../models/FYPModel')

//add new FYP 
router.post('/add', function (req, res, next) {
    FYPModel.create(req.body)
        .then((result) => {
            console.log('FYP has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all FYP
router.get('/', function (req, res, next) {
    FYPModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//get single FYP
router.get('/:id', function (req, res, next) {
    FYPModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//delete specific FYP
router.delete('/:id', function (req, res, next) {
    FYPModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});
//update FYP

router.put('/:id', function (req, res, next) {
    FYPModel.findOneAndUpdate({ _id: req.params.id }, {
        "$set": {
            "name": req.body.name
        }
    }, { new: true, upsert: false }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


module.exports = router;