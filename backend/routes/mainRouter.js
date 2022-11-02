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
      post: "President, (SNTC) Technical Affairs",
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

router.route("/research").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "President, Research Affairs",
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
      post: "President, Cultural Affairs",
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

router.route("/sports").get(async (req, res) => {
  try {
    const secretary = await secretariesTable.findOne({
      post: "President, Sports Affairs",
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
      post: "President, Literary Affairs",
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
      post: "President, Hostel Affairs",
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
      post: "President, Academic Affairs",
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
