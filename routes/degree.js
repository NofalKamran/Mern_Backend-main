var express = require('express');
var router = express.Router();



const DegreeModel = require('../models/DegreeModel')

//add new degree
router.post('/add', function (req, res, next) {
    DegreeModel.create(req.body)    
        .then((result) => {
            console.log('new degree has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});



//get all degree
router.get('/', function (req, res, next) {
    DegreeModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});




router.get('/:id', function (req, res, next) {
    DegreeModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


router.delete('/:id', function (req, res, next) {
    DegreeModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.put('/:id', function (req, res, next) {
    DegreeModel.findOneAndUpdate({ _id: req.params.id }, {
        "$set": {
            "designation": req.body.designation
        }
    }, { new: true, upsert: false }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


module.exports = router;