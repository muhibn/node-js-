const fs=require("fs");
const http=require("http"); 

const server=http.createServer((req,res)=>
{
    const rstream=fs.createReadStream("mydata.txt");
/*
    rstream.on('data',(chuckdata)=>
    {
        res.write(chuckdata);
        console.log(chuckdata);
    });
    rstream.on('end',()=>
    {
        res.end();
    });
    rstream.on("error",(err)=>
    {
        res.end(err+"this the error secont ");
    })
    */
     rstream.pipe(res);
});

server.listen(8000,"127.0.0.1");