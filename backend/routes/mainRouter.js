const router = require("express").Router();
const secretariesTable = require("../models/secretary.model");

router.route("/").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.find();
    const context = {
      status: "success",
      data: secretary,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/technical").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "Technical",
      year: 2022,
    });
    console.log(secretary);
    const context = {
      status: "success",
      data: secretary,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/research").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "Research",
      year: 2022,
    });
    const context = {
      status: "success",
      data: secretary,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/cultural").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "Cultural",
      year: 2022,
    });
    const context = {
      status: "success",
      data: secretary,
    };
    console.log(context);
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/sports").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "Sports",
      year: 2022,
    });
    const context = {
      status: "success",
      data: secretary,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/literary").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "Literary",
      year: 2022,
    });
    const context = {
      status: "success",
      data: secretary,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/hostel").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "Hostel",
      year: 2022,
    });
    const context = {
      status: "success",
      data: secretary,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

router.route("/senate").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "Academic",
      year: 2022,
    });
    const context = {
      status: "success",
      data: secretary,
    };
    res.status(200).json(context);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

module.exports = router;
