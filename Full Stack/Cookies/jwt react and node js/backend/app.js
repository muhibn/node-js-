const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const jwt=require('jsonwebtoken');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

const users=[
    {"email":"mohebullah2015@gmail.com",password:"1234",id:12345},
    {"email":"Ezatullah",password:"1234",id:12345}

]
app.get('/',(req,res)=>{

    res.send("Hello every one ");
});


app.post('/api/login',(req,res)=>{

    users.filter(user =>{
        if(user.email==req.body.email){
                    if(user.password===req.body.password){

                        const payload={
                            "id":user.id
                        }

                        jwt.sign(payload,'shhh',{expiresIn:"10h"},(err,token)=>{

                            console.log(token);

                            res.json({token:token})
                        })


                    }
            
            }
        }
    )
});

app.post('/api/posts',verifyToken,(req,res) => {


    jwt.verify(req.token,'shhh',(err,authData)=>{

        if(err)
        {
            res.sendStatus(403);
        }else{

            console.log("post is sucessful ");
            res.json(
                {"Blogpost":"Blog post is successfully "}
            )
        }
    })

})

function verifyToken(req,res,next){

    const beareHeader=req.headers['authorization'];
    if(typeof beareHeader!=='undefined'){

        const bearer=beareHeader.split(' ');
        const bearerToken=bearer[1];
        req.token=bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}




app.listen(3000,()=>{
    console.log("The sever run on port 3000 successfully ");
})