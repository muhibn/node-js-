const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res) =>{
    if(req.url=="/")
    {
        res.end("this is contact page  ");
    }else if(req.url=="/about")
    {
        res.end("about page is loading ");
    }else if(req.url=="/apidata"){
        fs.readFile("jsondata.json",(err,data)=>
        {
            console.log(data);
            res.end(data);
        });
    }else{
        res.writeHead(404);
        res.end("<h1>404 error </h1>");
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("list from the 8000 ");
});