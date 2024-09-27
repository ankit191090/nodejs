const express = require("express")
const router = express.Router();
const controller = require("../controllers/userAuth")


router.post("/userSingup", controller.userSignup);
router.post("/userSingin", controller.userSignin);
router.post("forgotPassword", controller.forgotPassword);
router.post("resetPassword", controller.resetPassword);

module.exports = router;

