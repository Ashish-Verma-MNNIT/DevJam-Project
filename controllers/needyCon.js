const Need=require('../models/needs')
const needy_submit= (req,res)=>{
    const need= new Need({
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

    need.save()
    .then((result)=>{
        res.render('SuccessfulSubmission',{name:result.name})
    })
    .catch((err)=>{
        res.render('404',{title:'some error occured'})
        console.log(err)
    })
}

module.exports={
    needy_submit
}