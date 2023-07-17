const express=require('express');
const controllers=require("../controllers/auth")

const router=express.Router();

router.post('/sigin',controllers.sigin);


module.exports= router;


