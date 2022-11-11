var express = require('express');
var router = express.Router();
const ConferencePapersModel = require('../models/ConferencePapersModel')

//add new conference paper 
router.post('/add', function (req, res, next) {
    ConferencePapersModel.create(req.body)
        .then((result) => {
            console.log('publication has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all conference papers
router.get('/', function (req, res, next) {
    ConferencePapersModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//get single publication
router.get('/:id', function (req, res, next) {
    ConferencePapersModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//delete specific publication
router.delete('/:id', function (req, res, next) {
    ConferencePapersModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});
//update specific publication

router.put('/:id', function (req, res, next) {
    ConferencePapersModel.findOneAndUpdate({ _id: req.params.id }, {
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