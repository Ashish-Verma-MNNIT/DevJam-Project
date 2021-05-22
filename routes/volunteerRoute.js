const express=require('express')
const router=express.Router()
const {checkUser,checkVolunteer}=require('../middleware/authMiddleware')
const Volunteer=require('../models/volunteer')


router.post('/',checkUser,(req,res)=>{
    const volunteer= new Volunteer({
        name: req.body.name,
        age: req.body.age,
        aadhar: req.body.aadhar,
        gender: req.body.gender,
        serviceAddress: req.body.serviceAddress,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address,
        state:req.body.state,
        whatsapp:req.body.whatsapp
    })

    volunteer.save()
    .then((result)=>{
        res.render('SuccessfulSubmission',{name:result.name})
    })
    .catch((err)=>{
        res.render('404',{title:'some error occured'})
        console.log(err)
    })
})
router.get('/all',(req,res)=>{
    Volunteer.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('AllVolun',{volunteers:result})
    })
    .catch((err)=>{
        res.render('404',{title:'some error occured'})
        console.log(err)
    })
})
router.get('/:id',checkVolunteer,(req,res)=>{
    res.render('volunteer')
})
module.exports=router