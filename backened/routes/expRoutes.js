const express = require("express");
const {
  allPost ,registerPost
} = require("../controllers/expControllers");

const router = express.Router();

// router.route("/:chatId").get(protect, allMessages);
router.route("/").post(allPost);
router.post("/post", registerPost);

module.exports = router;