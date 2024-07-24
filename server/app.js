const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors("*"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/v1", require("./routes/sendMail"));
module.exports = app;
