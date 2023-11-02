const express = require("express");
const userController = require("./../controller/User");
const router = express.Router();

router.get("/create", userController.getCreateUser);
router.post("/create", userController.postCreateUser);
router.post("/login", userController.postLoginUser);

module.exports = router;
