const departments = require('../model/departmentModel');
const jwt = require("jsonwebtoken");

// get all departments
exports.getAllDepartmentsController = async (req, res) => {
    console.log("-------------Inside getAllDepartmentsController-------------");

    try {
        const allDepts = await departments.find();
        res.status(200).json(allDepts)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// add department
exports.addDepartmentController = async (req, res) => {
    console.log("-------------Inside addDepartmentController-------------");

    const { name, description, isActive } = req.body;

    console.log(name, description, isActive);

    try {
        const existingDept = await departments.findOne({ name });
        if (existingDept) {
            res.status(409).json("The department already exists.")
            console.log("The user department exists.", existingDept);
        }
        else {
            console.log("Creating new department");

            const newDept = await departments.create({
                name, description, isActive
            })
            res.status(200).json(newDept)
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// edit department
exports.editDepartmentController = async (req, res) => {
    console.log("-------------Inside editDepartmentController-------------");

    const { id } = req.params
    const { name, description, isActive } = req.body;

    try {
        const deptDetails = await departments.findByIdAndUpdate({ _id: id }, { name, description, isActive }, { new: true });
        res.status(200).json(deptDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// delete department
exports.removeDepartmentController = async (req, res) => {
    console.log("-------------Inside removeDepartmentController-------------");
    const { id } = req.params
    try {
        const deptDetails = await departments.findByIdAndDelete({ _id: id });
        res.status(200).json(deptDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}
