const router = require('express').Router();
const secretariesTable = require("../models/secretary.model");

router.route('/').get((req, res) => {
  secretariesTable.find()
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/technical').get((req, res) => {
  secretariesTable.find({post:"Technical"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/research').get((req, res) => {
  secretariesTable.find({post:"Research"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cultural').get((req, res) => {
  secretariesTable.find({post:"Cultural"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sports').get((req, res) => {
  secretariesTable.find({post:"Sports"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/literary').get((req, res) => {
  secretariesTable.find({post:"Literary"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/hostel').get((req, res) => {
  secretariesTable.find({post:"Hostel"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/senate').get((req, res) => {
  secretariesTable.find({post:"Academic"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;