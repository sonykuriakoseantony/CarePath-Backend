const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    patientId : {
        type : ObjectId,
        required : true
    },
    severity : {
        type : String,
        required : true,
        unique : true
    },
    duration : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    suggestedDepartmentId : {
        type : ObjectId,
        required : true
    },
    confidenceScore : {
        type : Number,
        required : true
    },
    isAvailable : {
        type : Boolean,
        required : true
    }
},{
    timestamps : true
})

const requests = mongoose.model('requests', requestSchema);

module.exports = requests;
