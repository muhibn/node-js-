fs=require("fs");


fs.writeFile("./muhibe/Asynch.txt","This my top about the subject ",(err) =>{
    console.log("file read succesfully");
    console.log(err);
});
/*
console.log("hello world ");

fs.appendFile("Asynch.txt","\n this the appended line ",(err) => {
    console.log("append successfuly ");
    console.log(err);
});



fs.readFile("Asynch.txt","UTF-8",(err,data)=>{ 
    console.log("the file read successfully");
    
   console.log(data);
    console.log(err)
});


fs.rename("Asynch.txt","Asynchoronize.txt",(err)=>{console.log(err)});
*/
