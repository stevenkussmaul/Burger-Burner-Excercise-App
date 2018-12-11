"use strict";
const express = require("express");
const app = express();
const food = require("./routes.js");


app.use(express.json());
app.use(express.static("./"));
app.use("/",food);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is on port 3000");
});