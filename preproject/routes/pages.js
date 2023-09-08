const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.render("home");
});


router.get("/about",(req,res)=>{
    res.render("about");
})

router.get("/login",(req,res)=>{
    res.render("login");
})


router.get("/register",(req,res)=>{

    res.render("register")
});

router.get("/iteminput",(req,res)=>{

    res.render("iteminput")
});


module.exports=router;