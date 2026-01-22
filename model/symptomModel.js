const mongoose = require('mongoose');

const symptomSchema = mongoose.Schema({
    keywords : {
        type : [],
        required : true
    },
    departmentId : {
        type : ObjectId,
        required : true
    },
    weight : {
        type : Number,
        required : true
    },
    isActive : {
        type : Boolean,
        required : true
    }
},{
    timestamps : true
})

const symptoms = mongoose.model('symptoms', symptomSchema);

module.exports = symptoms;
