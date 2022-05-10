const express = require('express');
const router = express.Router();
const User = require('../database/conn')


router.get('/login',(req,res)=>{
    res.send("hello")
})

// router.get('/register',(req,res)=>{
//     console.log("hello");
//     res.send({id:"Heloo register page"})
// })
router.post('/login',(req,res)=>{
    User.findOne({email:req.body.email},(err,data)=>{
        if(err) res.send({message : "error in database"})
        else{
            if(data){
                if(data.password === req.body.password) res.send({code:1})
                else res.send({code:11})
            }else res.send({code:0})
        }
    })
})
router.post('/register',async (req,res)=>{
    const {name ,email,password} = req.body;
    await User.findOne({email:email},(err,data)=>{
        if(err) res.send({message : "error in database"})
        else{
            if(data){
                res.send({message : "You are already registered 😏"})
            }else{
                const user = new User({
                    name,
                    email,
                    password
                })
                user.save();
                res.send({code:200,message:"Congratulation , you are registered 🎉✨"})
            }
        }
    })
})


module.exports = router;