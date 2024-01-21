const fs=require("fs");

fs.writeFileSync("files.txt","this  line  write  the js node ");


fs.appendFileSync("file.txt"," multi star");


buffer_cont=fs.readFileSync("file.txt");

console.log(buffer_cont,"\n",buffer_cont.toString());


fs.mkdirSync("muhib");

