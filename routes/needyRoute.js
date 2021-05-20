const express=require('express')
const router=express.Router();
const needyCon=require('../controllers/needyCon');
const Need = require('../models/needs');

router.get('/',(req,res)=>{
    res.render('needy')
})

router.post('/',needyCon.needy_submit)

router.get('/all',(req,res)=>{
    Need.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('AllNeeds',{needs:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/single',(req,res)=>{
    Need.findById("60a4dc313503192fc0f21028")
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})
module.exports=router;