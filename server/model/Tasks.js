const mongoose=require('mongoose');


const UserSchema=new mongoose.Schema({
        title: String,
        description: String,
        status: String
})
const UserModel=mongoose.model("tasks",UserSchema)
module.exports=UserModel
