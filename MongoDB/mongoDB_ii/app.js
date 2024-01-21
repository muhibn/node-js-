const express=require("express");
const {connectToDb,getDb}=require('./db')
const  {objecId}=require('mongodb')

const app=express();
app.use(express.json());

let db 
connectToDb((err)=>{
    if(!err){
        
app.listen(3000,()=>{
    console.log("Server run on port 3000 successfuly ");
})
        
    }
    db=getDb();
})

app.get("/", (req, res) => {
    let emp = [];
    db.collection("empl")
      .find()
      .forEach((employee) => {
        emp.push(employee);
      })
      .then(() => {
        res.status(200).send(emp);
      })
      .catch((err) => {
        res.status(500).json({ error: "This collection doesn't exist " });
      });
  });
  