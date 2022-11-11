var express = require('express');
var router = express.Router();
const JournalAriticalsModel = require('../models/JournalAriticalsModel')

//add new journal artical 
router.post('/add', function (req, res, next) {
    JournalAriticalsModel.create(req.body)
        .then((result) => {
            console.log('publication has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all journal articals
router.get('/', function (req, res, next) {
    JournalAriticalsModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//get single journal artical
router.get('/:id', function (req, res, next) {
    JournalAriticalsModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//delete journal artical
router.delete('/:id', function (req, res, next) {
    JournalAriticalsModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});
//update specific journal artical

router.put('/:id', function (req, res, next) {
    JournalAriticalsModel.findOneAndUpdate({ _id: req.params.id }, {
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