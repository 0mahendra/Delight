const express = require("express");
const {
  sendData,
} = require("../controllers/dataControllers");

const router = express.Router();

// router.route("/:chatId").get(protect, allMessages);
router.route("/").post(sendData);

module.exports = router;