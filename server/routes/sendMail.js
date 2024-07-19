const express = require("express");
const router = express.Router();
const { sendFault } = require("../controller/sendMail");

router.route("/send-mail").post(sendFault);
module.exports = router;
