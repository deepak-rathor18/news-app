const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    id:{
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
    
    phoneNumber:{
        type:Number,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true,
    },
    
})
 
const profileModel =  mongoose.model("profile",profileSchema)


module.exports = profileModel