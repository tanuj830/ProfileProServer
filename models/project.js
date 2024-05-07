const mongoose = require('mongoose')

const project = mongoose.Schema({

    title:{
        type:String,
        required:true
    }, 
    disp:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:false
    },
    project_url:{
        type:String,
        required:true
    },
    code_url:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    stack:{
        type:Array
    },
    minsOfRead:{
        type:Number
    },
    likes:{
        type:Number
    },
    views:{
        type:Number
    },
      Date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("project",project)