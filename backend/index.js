const express = require("express");
const port = process.env.PORT||8000;
const bodyParser = require("body-parser");
const session = require("express-session");
const useragent = require('express-useragent');
const mainRoutes = require("./routes/mainRoutes");

// ------------- ENV FILE, DATABASE CONNECTION -----------
require("dotenv").config({ path: "./config/config.env" });

// ------- EXPRESS, BODYPARSER, EJS VIEW ENGINE SETUP --------
const app = express();
app.use(useragent.express());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(function (req, res, next) {
    if (!req.user) {
        res.header(
            "Cache-Control",
            "private, no-cache, no-store, must-revalidate"
        );
        res.header("Expires", "-1");
        res.header("Pragma", "no-cache");
    }
    next();
});

// ----------- EXPRESS SESSION SETUP ------------
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

// --------------------  ROUTES SETUP -----------------------
app.use("/", mainRoutes);
app.get("*", function (req, res) {
	res.status(404).send("<h1>404 NOT FOUND!</h1>");
});

//  -------------------- PORT SETUP -----------------------------
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Connection Established!! http://localhost:${port}`);
});
