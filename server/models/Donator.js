var mongoose = require('mongoose');

var Donator = mongoose.model('Donator',{
    donatorID:{
        type:String
    },
    donatorBloodType:{
        type:String
    },
    lastDateOfDonation:{
        type:Date
    },
    age:{
        type:Number,
        required:true
    },  
    weight:{
        type:Number,
        required:true
    },
    pressureH:{
        type:Number,
        required:true
    },
    pressureL:{
        type:Number,
        required:true
    },
    previousDaysOfDonation:{
        type:[Date]
    },
    nextDateOfDonation:{
        type:Date
    },
    email:{
        type:String,
        trim: true
    },
    phone:{
        type:String,
        trim:true
    }
});

module.exports = {Donator}