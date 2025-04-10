import {EventEmitter} from "node:events";

class myEmitter extends  EventEmitter {}

const emitter = new myEmitter();

emitter.on('onClick',(name,age,gender)=>{
    console.log(`My name is : ${name} , I am ${age} years old ${gender}`);
});

emitter.emit('onClick',"Nipuna",24,"Boy");