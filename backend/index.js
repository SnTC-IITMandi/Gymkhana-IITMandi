const express = require('express');
const cors = require('cors');
const connectDB=require("./config/db")
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
connectDB();


const SecRouter = require('./routes/Secretaries');

app.use('/Secretaries', SecRouter);

app.get("*", function (req, res) {
	res.status(404).send("<h1>404 NOT FOUND!</h1>");
});


app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Connection Established!! http://localhost:${port}`);
});
