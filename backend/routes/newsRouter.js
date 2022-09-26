const router = require('express').Router();

const newsTable = require("../models/news.model");


router.route("/").get((req,res)=>{
    newsTable.find()
    .then(news=>res.json(news))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;