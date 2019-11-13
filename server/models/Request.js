var mongoose = require('mongoose');

var Request = mongoose.model('Request',{
    requestID:{
        type:String,
        required:true
    },
    requestTime:{
        type:Date,
        value:Date.now()
    },
    bloodType:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true,
        trim: true
    },
    requesterID:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    }
});

module.exports = {Request}