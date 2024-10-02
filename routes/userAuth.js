const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController")


router.post("/userSignup", userController.userSignup);
router.post("/userSignin", userController.userSignin);
router.post("forgotPassword", userController.forgotPassword);
router.post("resetPassword", userController.resetPassword);

module.exports = router;

