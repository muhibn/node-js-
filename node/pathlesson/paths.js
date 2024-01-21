const  path=require("path");

console.log(path.dirname("C:/Users/moheb/OneDrive/Desktop/node/pathlesson/paths.js"));

//for extension name 
console.log(path.extname("C:/Users/moheb/OneDrive/Desktop/node/pathlesson/paths.js"));


console.log(path.basename("C:/Users/moheb/OneDrive/Desktop/node/pathlesson/paths.js"))

 inff=path.parse("C:/Users/moheb/OneDrive/Desktop/node/pathlesson/paths.js");

 console.log(inff.name, inff.root, inff);