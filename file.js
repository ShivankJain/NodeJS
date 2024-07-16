const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// ############### CREATE/WRITE #################

// Sync... Call

// fs.writeFileSync("./test.txt", "Hey There !!!");

// Async

// fs.writeFile("./test.txt","Hello World", (err)=>{})
// Synchronous and Asynchronous ... Blocking and Non Blocking requests

 //############    READ   ########

// >>>>>>>Synchronus returns
// const res=fs.readFileSync("./contacts.txt", "utf-8")
// console.log(res);


// >>>>>>>Asyncronous Does not returns and expects a callback function

// fs.readFile("./contacts.txt","utf-8", (err,res)=>{
//     if(err){ 
//         console.log('Erro : ',err)
//     }   
//     else{
//         console.log(res)
//     }
// })


// ########################### APPEND #######################

// fs.appendFileSync("./contacts.txt", new Date().getDate().toLocaleString())  /// always string

fs.appendFileSync("./contacts.txt", `\n ${Date.now()} James Jain : +1893939399`)

fs.cpSync("./contacts.txt","./copy.txt") //copy