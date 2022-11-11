let express = require('express');
let router = express.Router();

let CertiModel = require("../models/CertificateModel")

//add new interface design
router.post('/add', function (req, res, next) {
     
    CertiModel.create(req.body)
        .then((result) => {
            console.log('Certification has been added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});


router.get('/', function (req, res, next) {
    CertiModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


router.get('/:id', function (req, res, next) {
    CertiModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.delete('/:id', function (req, res, next) {
    CertiModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.put('/:id', function (req, res, next) {
    CertiModel.findOneAndUpdate({ _id: req.params.id }, {
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