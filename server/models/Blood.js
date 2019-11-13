var mongoose = require('mongoose');

var Blood = mongoose.model('Blood',{
    bloodID:{
        type:String,
        required:true
    },
    bloodType:{
        type:String,
        required:true
    },
    donatorId:{
        type:String,
        required:true,
        trim: true
    },
    distributed:{
        type:Boolean,
        required:true
    }
});

module.exports = {Blood}