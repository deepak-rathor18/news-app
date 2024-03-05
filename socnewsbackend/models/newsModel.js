const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    postTitle:{
        type:String,
        required:true
    },
    postDescription:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    },
    
})
 
const newsModel =  mongoose.model("news",newsSchema)


module.exports = newsModel