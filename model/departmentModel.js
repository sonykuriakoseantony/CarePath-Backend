const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    isActive : {
        type : Boolean,
        required : true
    }
},{
    timestamps : true
})

const departments = mongoose.model('departments', departmentSchema);

module.exports = departments;
