const router = require("express").Router();
router.get("/", async (req, res) => {
  res.send({ title: 'Gymkhana Website' });
});  
module.exports = router;
