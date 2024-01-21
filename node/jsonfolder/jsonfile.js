const fs=require("fs");
const obj={
    name:"Muhibullah ",
    age:27,
    job:"software engineer",
}

const jsondata=JSON.stringify(obj);

fs.writeFile("jsonmydata.json",jsondata,(err)=>{
    console.log(err); 
    console.log("write successfully");
})
dat="";
fs.readFile("jsonmydata.json","UTF-8",(err,data)=>{
   console.log(err);
   console.log("the reading process sucessfuly finish ");
   const objs=JSON.parse(data);
   
   console.log(objs);
});
