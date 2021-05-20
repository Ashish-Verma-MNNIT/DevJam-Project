const mongoose=require('mongoose')
const Schema=mongoose.Schema

const volunteerSchema=new Schema({
    name:{ type:String, required:true},
    address:{type:String},
    age:{type:String},
    aadhar:{type:String, required:true},
    gender:{type:String},
    phone:{type:String,required:true},
    serviceAddress:{type:String, required:true},
    state:{type:String, required:true},
    whatsapp:{type:String},
    email:{type:String}
},{timestamps:true})

const Volunteer=mongoose.model('Volunteer',volunteerSchema)
module.exports=Volunteer;