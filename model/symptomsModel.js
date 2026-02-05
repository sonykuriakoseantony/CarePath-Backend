const mongoose = require('mongoose');

const symptomSchema = mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    patientEmail: {
        type: String,
        required: true
    },
    patientId : {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    patientNotes: {
        type: String,
        required: false,
        default: ' '
    },
    medicalReports: {
        type: [String],
        default: []
    },
    status: {
        type: String,
        required: true,
        default: "submitted"
    },
    suggestedDepartmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "departments", // MUST match Department model name mongoose.model(MODEL_NAME, schema)
        default: null
    },
    suggestedDoctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctors", // MUST match Doctor model name mongoose.model(MODEL_NAME, schema)
        default: null
    },
    confidenceScore: {
        type: Number,
        required: true,
        default: 0
    },
    approvedAt: {
        type: String,
        required: true,
        default: ' '
    },
    adminNotes: {
        type: String,
        required: true,
        default: ' '
    }
}, {
    timestamps: true
})

const symptoms = mongoose.model('symptoms', symptomSchema);

module.exports = symptoms;
