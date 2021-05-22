const express=require('express')
const app=express()
const mongoose=require('mongoose')
const needyRoute=require('./routes/needyRoute')
const donarRoute=require('./routes/donarRoute')
const volunteerRoute=require('./routes/volunteerRoute')
const authRoute=require('./routes/authRoute')
require("dotenv").config();
const cookieParser=require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/authMiddleware')

const dbUri=process.env.MONGO_URI;
mongoose.connect(dbUri,{useNewUrlParser:true, useUnifiedTopology:true})
    .then((result)=>{app.listen(8000); console.log('connected to db and started')})
    .catch((err)=>{
        console.log(err)
    })


app.use(express.static('./public'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.get('*',checkUser)
app.get('/',(req,res)=>{
    res.render('index')
})

app.use('/needy',requireAuth,needyRoute)
app.use('/donar',requireAuth, donarRoute)
app.use('/volunteer',requireAuth, volunteerRoute)
app.use(authRoute)

app.use((req,res)=>{
    res.status(404).render('404',{title:404})
})
