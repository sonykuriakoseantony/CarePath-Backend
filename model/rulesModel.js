const mongoose = require('mongoose');

const rulesSchema = mongoose.Schema({
    symptomKeywords : {
        type : [],
        required : true
    },
    departmentId : {
        type : String,
        required : true
    },
    priority : {
        type : Number,
        required : true
    },
    confidenceWeight : {
        type : Number,
        required : true
    }
},{
    timestamps : true
})

const rules = mongoose.model('rules', rulesSchema);

module.exports = rules;
