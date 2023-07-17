const express=require("express");
const mysql=require("mysql");
const path=require('path');
const dotenv=require("dotenv");


dotenv.config({path: './.env'});


const app=express();

const db=mysql.createConnection({

    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
const publicDirectory=path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
console.log(__dirname);

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.set('view engine','hbs');



db.connect((err)=>{
    if(err){
        console.log("you have error for connect of database "+err);
    }else
    {
        console.log("dataase is connect  successful ");
    }
})
app.use('/',require('./routes/pages'));


app.use('/auth',require('./routes/auth'));

app.listen(5000,()=>{
console.log("server start");
});

