const express=require('express')
const router=express.Router();
const donarCon=require('../controllers/donarCon');
const Donation = require('../models/donations');

router.get('/',(req,res)=>{
    res.render('donar')
})

router.post('/',donarCon.donar_submit)

router.get('/all',(req,res)=>{
    Donation.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('AllDonations',{donations:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports=router;