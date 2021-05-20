const express=require('express')
const app=express()
const mongoose=require('mongoose')
const needyRoute=require('./routes/needyRoute')
const donarRoute=require('./routes/donarRoute')
const volunteerRoute=require('./routes/volunteerRoute')

const dbUri='mongodb+srv://Ashish:ashishkv2016@cluster0.hxqys.mongodb.net/DevJam?retryWrites=true&w=majority'
mongoose.connect(dbUri,{useNewUrlParser:true, useUnifiedTopology:true})
    .then((result)=>app.listen(3000))
    .catch((err)=>{
        console.log(err)
    })


app.use(express.static('./public'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index')
})

app.use('/needy',needyRoute)
app.use('/donar', donarRoute)
app.use('/volunteer', volunteerRoute)

app.use((req,res)=>{
    res.status(404).render('404',{title:404})
})
