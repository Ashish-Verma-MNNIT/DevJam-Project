const Donation=require('../models/donations')
const jwt=require('jsonwebtoken')
const User = require('../models/user')
const donar_submit= (req,res)=>{
    const donation= new Donation({
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

    donation.save()
    .then((result)=>{
        res.render('SuccessfulSubmission')
    })
    .catch((err)=>{
        res.render('404',{title:'some error occured'})
        console.log(err)
    })
}

const myDonations=async(req,res)=>{
    const mydonations=await Donation.find({email:req.params.id})
    console.log(mydonations)
    res.render('myDonations',{mydonations})
}
const remove=async(req,res)=>{
    await Donation.deleteOne({_id:req.params.id})
    const token=req.cookies.jwtCookie
    jwt.verify(token,JWT_SECRET,async(err,decodedToken)=>{
        let user=await User.findById(decodedToken.id)
        const mydonations=await Donation.find({email:user.email})
        res.render('myDonations',{mydonations})
    })
}
module.exports={
    donar_submit,
    myDonations,
    remove
}