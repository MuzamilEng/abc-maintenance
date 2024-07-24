const express = require("express");
const router = express.Router();
const { sendFault } = require("../controller/sendMail");
const upload = require("../middleware/multer");

router.route("/send-mail").post(upload.array("images", 3),sendFault);
module.exports = router;
