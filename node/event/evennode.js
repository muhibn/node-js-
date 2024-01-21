//const EventEmilter=require("events");
  
const EventEmitter=require("events");


const event=new EventEmitter();

/*
 event.on("myevent", ()=>
 {
    console.log("this my event ")
 })


 event.on("myevent", ()=>
 {
    console.log("this my event this there are event ");
 })

 
 event.on("myevent", ()=>
 {
    console.log("this my event  this your event ");
 })

 event.emit("myevent");

 */
event.on("checkEvent", (err,mass)=> {
    console.log('the is the error ${err} this the massage ${mass}');
});

event.emit("checkEvent",200,"successful");