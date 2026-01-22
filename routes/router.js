const express = require("express");
const userController = require("../controller/userController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = new express.Router();

//register routes for patient registration
router.post('/register', userController.registerController);

//login routes for admin, review_specialist and patient
router.post('/login', userController.loginController);

//add user --> '/add' --> POST request to add user to db
router.post('/user/add', userController.addUserController)

//get all users --> '/all-users' --> GET request to get all users from db
router.get('/users/all', adminMiddleware, userController.getAllUsersController)

//view user --> '/user/:id/view' --> GET request to get a single user from db
router.get('/user/:id', adminMiddleware, userController.getUserByIdController)

//edit user --> '/user/:id/edit' --> PUT request to edit a single user from db
router.put('/user/:id/edit', userController.editUSerController)

//delete user --> '/user/:id/delete' --> DELETE request to delete a single user from db
router.delete('/user/:id/delete', userController.removeUSerController)

module.exports = router;