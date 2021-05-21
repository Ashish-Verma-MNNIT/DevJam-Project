const express=require('express')
const router=express.Router();
const donarCon=require('../controllers/donarCon');
const Donation = require('../models/donations');
const {checkUser}=require('../middleware/authMiddleware')

router.get('/',(req,res)=>{
    res.render('donar')
})

router.post('/',checkUser,donarCon.donar_submit)

router.get('/all',(req,res)=>{
    Donation.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('AllDonations',{donations:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/remove/:id',donarCon.remove)
router.get('/:id',checkUser, donarCon.myDonations)

module.exports=router;