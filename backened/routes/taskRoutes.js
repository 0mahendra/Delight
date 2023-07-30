const express = require("express");
const {
  getTask,
  sendTask,
} = require("../controllers/taskControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/task").get(getTask);
router.route("/").post( sendTask);

module.exports = router;