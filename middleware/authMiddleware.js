const jwt=require('jsonwebtoken')
const User = require('../models/user')
const Volunteer=require('../models/volunteer')
require('dotenv').config()
JWT_SECRET=process.env.JWT_SECRET
const requireAuth=(req,res,next)=>{
    const token=req.cookies.jwtCookie
    console.log(token)
    if(token){
        jwt.verify(token,JWT_SECRET,(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.redirect('/login')
            }else{
                next()
            }
        })
    }else{
        res.redirect('/login')
    }
}

const checkUser=(req,res,next)=>{
    const token=req.cookies.jwtCookie
    if(token){
        jwt.verify(token,JWT_SECRET,async(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.locals.user=null
                next();            
            }
            else{
                let user=await User.findById(decodedToken.id)
                res.locals.user=user;
                next()
            }
        })
    }
    else{
        res.locals.user=null
        next()
    }
}

const checkVolunteer=async (req,res)=>{
const isVolunteer=await Volunteer.exists({email:req.params.id})
if(isVolunteer){
    res.send('you are already a volunteer')
}else
    res.render('volunteer')
}
module.exports={requireAuth,checkUser,checkVolunteer}