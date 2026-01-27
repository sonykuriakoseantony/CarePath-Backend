const express = require("express");
const userController = require("../controller/userController");
const departmentController = require("../controller/departmentController");
const doctorController = require("../controller/doctorController");
const ruleController = require("../controller/rulesController");
const symptomController = require("../controller/symptomsController");

const jwtMiddleware = require('../middlewares/jwtMiddleware');
const adminMiddleware = require("../middlewares/adminMiddleware");
const multerMiddleware = require('../middlewares/multerMiddleware');

const router = new express.Router();


//--------------Auth Login/Register routes------------------
//register routes for patient registration
router.post('/register', userController.registerController);

//login routes for admin, review_specialist and patient
router.post('/login', userController.loginController);


//--------------Uers routes------------------
//add user --> '/add' --> POST request to add user to db
router.post('/user/add', userController.addUserController)

//get all users --> '/all-users' --> GET request to get all users from db
router.get('/users/all', adminMiddleware, userController.getAllUsersController)

//view user --> '/user/:id/view' --> GET request to get a single user from db
router.get('/user/:id', adminMiddleware, userController.getUserByIdController)

//edit user --> '/user/:id/edit' --> PUT request to edit a single user from db
router.put('/user/:id/edit', adminMiddleware, userController.editUserController)

//delete user --> '/user/:id/delete' --> DELETE request to delete a single user from db
router.delete('/user/:id/delete', adminMiddleware, userController.removeUserController)


//--------------Departments routes------------------
//get all departments --> '/departments/all' --> GET request to get all departments from db
router.get('/departments/all', adminMiddleware, departmentController.getAllDepartmentsController)

//add department --> '/department/add' --> POST request to add department to db
router.post('/department/add', adminMiddleware, departmentController.addDepartmentController)

//edit department --> '/department/:id/edit' --> PUT request to edit a single department
router.put('/department/:id/edit', adminMiddleware, departmentController.editDepartmentController)

//delete department --> '/department/:id/delete' --> DELETE request to delete a single department from db
router.delete('/department/:id/delete', adminMiddleware, departmentController.removeDepartmentController)


//--------------Doctors routes------------------
//get all doctors --> '/doctors/all' --> GET request to get all doctors from db
router.get('/doctors/all', adminMiddleware, doctorController.getAllDoctorsController)

//add doctor --> '/doctor/add' --> POST request to add doctor to db
router.post('/doctor/add', adminMiddleware, doctorController.addDoctorController)

//view doctor --> '/user/:id' --> GET request to get a single doctor from db
router.get('/doctor/:id', adminMiddleware, doctorController.getDoctorByIdController)

//edit doctor --> '/doctor/:id/edit' --> PUT request to edit a single doctor
router.put('/doctor/:id/edit', adminMiddleware, doctorController.editDoctorController)

//delete doctor --> '/doctor/:id/delete' --> DELETE request to delete a single doctor from db
router.delete('/doctor/:id/delete', adminMiddleware, doctorController.removeDoctorController)


//--------------Rules routes------------------
//get all rules --> '/rules/all' --> GET request to get all rules from db
router.get('/rules/all', adminMiddleware, ruleController.getAllRulesController)

//add rule --> '/rule/add' --> POST request to add rule to db
router.post('/rule/add', adminMiddleware, ruleController.addRuleController)

//view rule --> '/rule/:id' --> GET request to get a single rule from db
router.get('/rule/:id', adminMiddleware, ruleController.getRuleByIdController)

//edit rule --> '/rule/:id/edit' --> PUT request to edit a single rule
router.put('/rule/:id/edit', adminMiddleware, ruleController.editRuleController)

//delete rule --> '/rule/:id/delete' --> DELETE request to delete a single rule from db
router.delete('/rule/:id/delete', adminMiddleware, ruleController.removeRuleController)


//--------------Symptoms routes------------------
//get all symptoms --> '/symptoms/all' --> GET request to get all symptoms from db
router.get('/symptoms/all', adminMiddleware, symptomController.getAllSymptomsController)

router.get('/cases/all', jwtMiddleware, symptomController.getAllCasesController)

//add symptom --> '/symptom/add' --> POST request to add symptom to db
router.post('/symptom/add', jwtMiddleware, multerMiddleware.array('uploadImg', 3), symptomController.addSymptomController)

//add symptom --> '/symptom/add' --> POST request to add symptom to db
router.put('/symptom/:id/update', adminMiddleware, symptomController.updateSymptomController)



module.exports = router;
