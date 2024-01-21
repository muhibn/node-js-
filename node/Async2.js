fs=require("fs");
/*
fs=require("fs");


fs.writeFile("./muhibe/Asynch.txt","This my top about the subject ",(err) =>{
    console.log("file read succesfully");
    console.log(err);
});
*/
fs.unlink("./muhibe/Asynch.txt",(err) => console.log(err));