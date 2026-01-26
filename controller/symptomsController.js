const symptom = require('../model/symptomsModel');
const multerMiddleware = require('../middlewares/multerMiddleware');

// get all symptoms
exports.getAllSymptomsController = async (req, res) => {
    console.log("-------------Inside getAllSymptomsController-------------");

    try {
        const allSymptoms = await symptom.find();
        res.status(200).json(allSymptoms)

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// get all cases by patients by id
exports.getAllSymptomsController = async (req, res) => {
    console.log("-------------Inside getAllSymptomsController-------------");

    try {
        const allSymptoms = await symptom.find();
        res.status(200).json(allSymptoms)

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// get all cases by patients by id
exports.getAllCasesController = async (req, res) => {
    console.log("-------------Inside getAllCasesController-------------");
    console.log(req);

    const patientEmail = req.payload.email;

    try {
        const userCases = await symptom.find({
            patientEmail: patientEmail
        });
        res.status(200).json(userCases)

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// add symptoms
exports.addSymptomController = async (req, res) => {
    console.log("-------------Inside addSymptomsController-------------");

    console.log("========================================================");

    const medicalReports = req.files ? req.files.map(file => file.filename) : [];

    const { patientName, patientEmail, patientId, symptoms, severity, duration, patientNotes } = req.body;
    console.log(patientName, patientEmail, patientId, symptoms, duration, severity, patientNotes, medicalReports);

    try {
        console.log("Creating new Symptoms");
        const newSymptom = await symptom.create({
            patientName, patientEmail, patientId, symptoms, duration, severity, patientNotes, medicalReports
        })
        res.status(200).json(newSymptom)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// update symptoms
exports.updateSymptomController = async (req, res) => {
    console.log("-------------Inside updateSymptomController-------------");

    // const medicalReports = req.files ? req.files.map(file => file.filename) : [];

    const { patientName, patientEmail, patientId, symptoms, severity, duration, patientNotes, medicalReports, status, suggestedDepartmentId, suggestedDoctorId, confidenceScore, approvedAt, adminNotes } = req.body;
    console.log(patientName, patientEmail, patientId, symptoms, severity, duration, patientNotes, medicalReports, status, suggestedDepartmentId, suggestedDoctorId, confidenceScore, approvedAt, adminNotes);

    try {
        console.log("Creating new Symptoms");
        const newSymptom = await symptom.create({
            patientName, patientEmail, patientId, symptoms, severity, duration, patientNotes, medicalReports, status, suggestedDepartmentId, suggestedDoctorId, confidenceScore, approvedAt, adminNotes
        })
        res.status(200).json(newSymptom)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}
