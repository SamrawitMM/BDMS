var {mongoose} = require('./db/mongoose');

var Todo = mongoose.model('Todos',{
    text:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

var newTodo = new Todo({
    text:'Cook dinner'
})

newTodo.save().then((doc)=>{
    console.log("saved todo ",doc)
},(e)=>{
    console.log("Unable to save todo")
})