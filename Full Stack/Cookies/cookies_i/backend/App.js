const express=require('express');
const cookieParser=require('cookie-parser');

const app=express();

app.use(cookieParser());

app.get('/',(req,res)=>{

    res.cookie('name','this first muhibullah cookies ',{maxAge:100000});
    res.send("This is my cookies ");

});

app.listen(3000,(err)=>{

    console.log("server run on port 3000 successfully ");
})