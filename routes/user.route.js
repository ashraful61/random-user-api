const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

router.route("/random").get(userController.getRandomUser);
router.route("/all").get(userController.getRandomUsers);
router.route("/save").post(userController.saveUser);
router.route("/update/:id").patch(userController.updateUser);
router.route("/delete/:id").delete(userController.deleteUser);
router.route("/update/bulk-upload").patch(userController.updatesUser);
module.exports = router;
