const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({

    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    user_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    } 
})

module.exports = mongoose.model('data',signUpTemplate)