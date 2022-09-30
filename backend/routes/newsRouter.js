const router = require('express').Router();

const news = require("../models/news.model");


router.route("/").get(async(req,res)=>{
    try {
        const secretary=await news.find()
        const context={
          status:'success',
          data:secretary,
        }
        res.status(200).json(context.data)
      } catch (err) {
        res.status(400).json({Error:err})
      }
});

module.exports = router;