var mongoose = require('mongoose');

var User = mongoose.model('User',{
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String,
        required:true,
        trim: true
    },
    role:{
        type:String,
        required:true
    },

});

module.exports = {User}