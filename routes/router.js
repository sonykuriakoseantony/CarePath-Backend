const express = require("express");
const userController = require("../controller/userController")

const router = new express.Router();

//register routes for patient registration
router.post('/register', userController.registerController);

//login routes for admin, review_specialist and patient
router.post('/login', userController.loginController);

//add user --> '/add' --> POST request to add user to db
router.post('/add', userController.addUserController)

//get all users --> '/all-users' --> GET request to get all users from db
router.get('/all-users', userController.getAllUsersController)

//view user --> '/user/:id/view' --> GET request to get a single user from db
router.get('/user/:id/view', userController.getUSerByIdController)

//edit user --> '/user/:id/edit' --> PUT request to edit a single user from db
router.put('/user/:id/edit', userController.editUSerController)

//delete user --> '/user/:id/delete' --> DELETE request to delete a single user from db
router.delete('/user/:id/delete', userController.removeUSerController)

module.exports = router;