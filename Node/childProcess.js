// //child process is a pre-installed app/module in node NPM -node pre manager just like google play store in android
//child_process isliye hoti hai aur cheeze bhi run kraa ske lekin humari main file chlti rehni chahiye  
// //DECLARATION OF CHILD PROCESS  syntax --> let variableName = require("child_process");
let cp = require("child_process");
console.log(cp);              //child_process returns a object 

//open calculator using file     WINDOWS- calc      OS- gnome calculator
cp.execSync("calc");              //execSync is a key of childprocess object  and execSync key value is a function 
   
//open vs code with child_process
cp.execSync("code");

// let content = cp.execSync("node childfile.js");
// console.log("connecting child file to parent file and getting their content " +content);    //childProcess.js file se humne childfile.js bhi run krdi

let content = cp.execSync("node childfile.js");  //cp.execSync()  means childprocess ka key execSync ki function  binary mai result detaa hai  itmeans content mai binary ki form mai value store hogi
console.log(content);
console.log(""+content);     //dont want result in binary then add  any string 
