const express=require('express')
const router=express.Router();
const needyCon=require('../controllers/needyCon');
const Need = require('../models/needs');
const {checkUser}=require('../middleware/authMiddleware')

router.get('/',(req,res)=>{
    res.render('needy')
})

router.post('/',checkUser, needyCon.needy_submit)

router.get('/all',(req,res)=>{
    Need.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('AllNeeds',{needs:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/remove/:id',checkUser, needyCon.remove)
router.get('/:id',checkUser, needyCon.myNeeds)

module.exports=router;