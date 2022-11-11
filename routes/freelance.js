var express = require('express');
var router = express.Router();
const GraphicsModel = require('../models/Freelance')

//add new interface design
router.post('/add', function (req, res, next) {
    GraphicsModel.create(req.body)
        .then((result) => {
            console.log('graphic design has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all interface designs
router.get('/', function (req, res, next) {
    GraphicsModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});



//get single graphic
router.get('/:id', function (req, res, next) {
    GraphicsModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.delete('/:id', function (req, res, next) {
    GraphicsModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.put('/:id', function (req, res, next) {
    GraphicsModel.findOneAndUpdate({ _id: req.params.id }, {
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