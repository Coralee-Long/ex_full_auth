const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema({
    name : {
        type : String,
        required : true,    
    },
    email : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 25
    },
    password : {
        type : String, 
        required : true,
        minlength : 5,
    }
})

module.exports = mongoose.model('User', User)