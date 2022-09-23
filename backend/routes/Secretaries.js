const router = require('express').Router();
mkd
router.route('/').get((req, res) => {
  Secretaries.find()
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/technincal').get((req, res) => {
  Secretaries.find({post:"Technical"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/research').get((req, res) => {
  Secretaries.find({post:"Research"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cultural').get((req, res) => {
  Secretaries.find({post:"Cultural"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sports').get((req, res) => {
  Secretaries.find({post:"Sports"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/literary').get((req, res) => {
  Secretaries.find({post:"Literary"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/hostel').get((req, res) => {
  Secretaries.find({post:"Hostel"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/senate').get((req, res) => {
  Secretaries.find({post:"Academic"})
    .then(sec => res.json(sec))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;cd 