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
    let secretary = await secretariesTable.find({
      post: "President, Technical Affairs",
    });
    secretary = secretary.reduce(
      function (prev, current) {
        if (+current.year > +prev.year) {
          return current;
        } else {
          return prev;
        }
      },
      { year: 0 }
    );
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
    let secretary = await secretariesTable.find({
      post: "President, Research Affairs",
    });
    secretary = secretary.reduce(
      function (prev, current) {
        if (+current.year > +prev.year) {
          return current;
        } else {
          return prev;
        }
      },
      { year: 0 }
    );
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
    let secretary = await secretariesTable.find({
      post: "President, Cultural Affairs",
    });
    secretary = secretary.reduce(
      function (prev, current) {
        if (+current.year > +prev.year) {
          return current;
        } else {
          return prev;
        }
      },
      { year: 0 }
    );
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
    let secretary = await secretariesTable.find({
      post: "President, Sports Affairs",
    });
    secretary = secretary.reduce(
      function (prev, current) {
        if (+current.year > +prev.year) {
          return current;
        } else {
          return prev;
        }
      },
      { year: 0 }
    );
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
    let secretary = await secretariesTable.find({
      post: "President, Literary Affairs",
    });
    secretary = secretary.reduce(
      function (prev, current) {
        if (+current.year > +prev.year) {
          return current;
        } else {
          return prev;
        }
      },
      { year: 0 }
    );
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
    let secretary = await secretariesTable.find({
      post: "President, Hostel Affairs",
    });
    secretary = secretary.reduce(
      function (prev, current) {
        if (+current.year > +prev.year) {
          return current;
        } else {
          return prev;
        }
      },
      { year: 0 }
    );
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
    let secretary = await secretariesTable.find({
      post: "President, Academic Affairs",
    });
    secretary = secretary.reduce(
      function (prev, current) {
        if (+current.year > +prev.year) {
          return current;
        } else {
          return prev;
        }
      },
      { year: 0 }
    );
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
