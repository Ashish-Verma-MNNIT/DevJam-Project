const mongoose=require('mongoose')
const Schema=mongoose.Schema

const donationSchema= new Schema({
    name:{ type:String, required:true},
    fatherName:{type:String},
    aadhar:{type:String, required:true},
    gender:{type:String},
    what:{type:Array, required:true},
    phone:{type:String,required:true},
    address:{type:String, required:true},
    state:{type:String, required:true},
    bloodGroup:{type:String, required:true},
    whatsapp:{type:String},
    email:{type:String}
},{timestamps:true})

const Donation=mongoose.model('Donation',donationSchema)
module.exports=Donation;