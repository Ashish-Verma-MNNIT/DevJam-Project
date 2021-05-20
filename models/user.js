const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
    name, fatherName, aadhar, bloodGroup, gender, what, phone, whatsapp, email, address, state
},{collection:'users'}
)

const model=mongoose.model('UserSchema',UserSchema);
module.exports=model