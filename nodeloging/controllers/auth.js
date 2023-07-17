
const mysql=require("mysql");

const db=mysql.createConnection({

    host :process.env.DATABASE_HOST,
    user :process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});

exports.sigin =(req,res)=>{


    const {username   ,email, password}=req.body;

    console.log(username ) 
    db.query("INSERT INTO login SET ? ",{username : username , email:email,password:password},(err,result)=>{
    if(err){
          console.log(err);
    }else{


        console.log("Value inserted ");
         return  res.render("profile",{
            message:"you data is inserted "});
    }
});

}