const doctors = require('../model/doctorModel');
const jwt = require("jsonwebtoken");

// get all doctors
exports.getAllDoctorsController = async (req, res) => {
    console.log("-------------Inside getAllDoctorsController-------------");

    try {
        const allDoctors = await doctors.find();
        res.status(200).json(allDoctors)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// add doctor
exports.addDoctorController = async (req, res) => {
    console.log("-------------Inside addDoctorController-------------");

    const { name, departmentId, email, phone, specialization, isAvailable } = req.body;

    console.log(name, departmentId, email, phone, specialization);

    try {
        const existingDoctor = await doctors.findOne({ email });
        if (existingDoctor) {
            res.status(409).json("The Doctor already exists.")
            console.log("The Doctor exists.", existingDoctor);
        }
        else {
            console.log("Creating new Doctor");

            const newDoctor = await doctors.create({
                name, departmentId, email, phone, specialization, isAvailable
            })
            res.status(200).json(newDoctor)
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// edit doctor
exports.editDoctorController = async (req, res) => {
    console.log("-------------Inside editDoctorController-------------");

    const { id } = req.params
    const { name, departmentId, email, phone, specialization, isAvailable } = req.body;

    try {
        const doctorDetails = await doctors.findByIdAndUpdate({ _id: id }, {
            name, departmentId, email, phone, specialization, isAvailable
        }, { new: true });
        res.status(200).json(doctorDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// view doctor
exports.getDoctorByIdController = async (req, res) => {
    console.log("-------------Inside getDoctorByIdController-------------");
    const { id } = req.params
    try {
        const doctorDetails = await doctors.findById({ _id: id });
        res.status(200).json(doctorDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// delete doctor
exports.removeDoctorController = async (req, res) => {
    console.log("-------------Inside removeDoctorController-------------");
    const { id } = req.params
    try {
        const doctorDetails = await doctors.findByIdAndDelete({ _id: id });
        res.status(200).json(doctorDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}
