const Need=require('../models/needs')
const jwt=require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config()
JWT_SECRET=process.env.JWT_SECRET
const needy_submit= (req,res)=>{
    const need= new Need({
        name: req.body.name,
        fatherName: req.body.fatherName,
        aadhar: req.body.aadhar,
        bloodGroup:req.body.bloodGroup,
        gender: req.body.gender,
        what: req.body.what,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address,
        state:req.body.state,
        whatsapp:req.body.whatsapp
    })

    need.save()
    .then((result)=>{
        res.render('SuccessfulSubmission')
    })
    .catch((err)=>{
        res.render('404',{title:'some error occured'})
        console.log(err)
    })
}

const myNeeds=async(req,res)=>{
    const needs=await Need.find({email:req.params.id})
    res.render('myNeeds',{needs})
}

const remove=async(req,res)=>{
    await Need.deleteOne({_id:req.params.id})
    const token=req.cookies.jwtCookie
    jwt.verify(token,JWT_SECRET,async(err,decodedToken)=>{
        let user=await User.findById(decodedToken.id)
        const needs=await Need.find({email:user.email})
        res.render('myNeeds',{needs})
    })
}
module.exports={
    needy_submit, 
    myNeeds,
    remove
}