const userController = require("../controllers/UserController.js");

const router = require("express").Router();

router.post("/user/addUser", userController.addUser);

router.post("/SignInUser", userController.oneUser);

router.put("/updateUser", userController.updateUser);

router.delete("/user/deleteUser", userController.deleteUser);

module.exports = router;
