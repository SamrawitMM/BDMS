var mongoose = require('mongoose');

var Department = mongoose.model('Department',{
    nameofdept:{
        type:String
    }
});

module.exports = {Department}