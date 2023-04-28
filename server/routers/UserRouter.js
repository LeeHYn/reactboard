const userController = require("../controllers/UserController.js");

const router = require("express").Router();

router.post("/user/addUser", userController.addUser);

router.post("/user/SignInUser", userController.oneUser);

router.post("/user/checkId", userController.checkId);

router.put("/user/updateUser", userController.updateUser);

router.delete("/user/deleteUser", userController.deleteUser);

module.exports = router;
