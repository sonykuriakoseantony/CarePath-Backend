const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    departmentId : {
        type : ObjectId,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : String,
        required : true
    },
    specialization : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    isAvailable : {
        type : Boolean,
        required : true
    }
},{
    timestamps : true
})

const doctors = mongoose.model('doctors', doctorSchema);

module.exports = doctors;
