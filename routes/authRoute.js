const express=require('express')
const router=express.Router()
const authCon=require('../controllers/authCon')

router.get('/login',authCon.toLogin)
router.post('/login',authCon.login)

router.get('/register',authCon.toRegister)
router.post('/register',authCon.register)

router.get('/logout',authCon.logout)

module.exports=router