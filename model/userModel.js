const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
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
    passwordHash : {
        type : String,
        required : true
    },
    role : {
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

const users = mongoose.model('users', userSchema);

module.exports = users;
