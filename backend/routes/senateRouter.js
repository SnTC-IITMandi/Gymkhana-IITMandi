const router = require("express").Router();

const senate = require("../models/senate.model");

router.route("/").get(async (req, res) => {
  try {
    const senateMembers = await senate.find();
    const context = {
      status: "success",
      data: senateMembers,
    };
    res.status(200).json(context.data);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

module.exports = router;
