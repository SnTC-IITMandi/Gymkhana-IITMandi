const router = require("express").Router();
const societyTable = require("../models/society.model");
const hostelTable = require("../models/hostel.model");


router.route("/technical").get(async (req, res) => {
  try {
    const society = await societyTable.findOne({
      society_name:"Technical Society"
    });
    const context = {
      status: "success",
      data: society,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/research").get(async (req, res) => {
  try {
    const society = await societyTable.findOne({
      society_name: "Research",
      
    });
    const context = {
      status: "success",
      data: society,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/cultural").get(async (req, res) => {
  try {
    const society = await societyTable.findOne({
      society_name: "Cultural Society",
      
    });
    const context = {
      status: "success",
      data: society,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/sports").get(async (req, res) => {
  try {
    const society = await societyTable.findOne({
      society_name: "Sports",
      
    });
    const context = {
      status: "success",
      data: society,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/literary").get(async (req, res) => {
  try {
    const society = await societyTable.findOne({
      society_name: "Literary",
      
    });
    const context = {
      status: "success",
      data: society,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/hostel").get(async (req, res) => {
  try {
    const society = await hostelTable.find();
    const context = {
      status: "success",
      data: society,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});


module.exports = router;
