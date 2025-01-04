const express =require('express');
require('dotenv').config();
const workoutroute=require('./routes/workout.js');

const mongoose=require('mongoose')
//express app
const app =express();
app.use(express.json());


//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})


app.use('/api/workout',workoutroute);



//connection of the  database 
mongoose.connect(process.env.MONG_URL).then(()=>{

    
//list the the requrest 
app.listen(process.env.PORT,()=>{
    console.log("listen on the port 4000  !!!");  
})


}).catch((error)=>{
    console.log(error);
})