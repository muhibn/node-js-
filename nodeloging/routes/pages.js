const express=require('express');

const router=express.Router();

router.get("/",(req,res)=>
{
    res.render('index');

});


router.get("/sigin",(req,res)=>
{
    res.render('sigin');

});


router.get("/profile",(req,res)=>
{
    res.render('profile');

});

module.exports=router;


