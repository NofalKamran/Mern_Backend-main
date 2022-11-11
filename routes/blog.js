let express = require('express');
let router = express.Router();

let BlogModel = require("../models/BlogModel")

//add new interface design
router.post('/add', function (req, res, next) {
    console.log("I am here!!")
    BlogModel.create(req.body)
        .then((result) => {
            console.log('Blog has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all interface designs
router.get('/', function (req, res, next) {
    BlogModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


router.get('/:id', function (req, res, next) {
    BlogModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.delete('/:id', function (req, res, next) {
    BlogModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.put('/:id', function (req, res, next) {
    BlogModel.findOneAndUpdate({ _id: req.params.id }, {
        "$set": {
            "Title": req.body.title,
        }
    }, { new: true, upsert: false }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


module.exports = router;