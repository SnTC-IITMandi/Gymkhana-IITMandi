const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const mainRouter = require("./routes/mainRouter");
const newsRouter = require("./routes/newsRouter");
const senateRouter = require("./routes/senateRouter");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
connectDB();

app.use("/", mainRouter);
app.use("/news", newsRouter);
app.use("/senate_members", senateRouter);
app.get("*", function (req, res) {
	res.status(404).send("PAGE  NOT  FOUND");
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Connection Established!! http://localhost:${port}`);
});
