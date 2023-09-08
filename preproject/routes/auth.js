const express=require("express");
const controllers=require("../controller/auth");
const router=express.Router();
const multer = require("multer");

const upload = multer({ dest: "upload" }); 

router.post("/register",controllers.register);

router.post("/login",controllers.login);

router.post("/iteminput",upload.single('file'),controllers.iteminput);




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
