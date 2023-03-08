const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
router.route("/random").get(userController.getRandomUser);

module.exports = router;
