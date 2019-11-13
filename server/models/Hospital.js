var mongoose = require('mongoose');

var Hospital = mongoose.model('Hospital',{
    hospitalID:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim: true
    },
    phone:{
        type:String,
        required:true
    }
});

module.exports = {Hospital}