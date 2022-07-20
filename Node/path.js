// "C:\Users\karis\OneDrive\Desktop\Tutorial of frontend\Node\path.js"    --path of the file 
//In all system path of file is different by /,\ etc.
let path = require("path");
// console.log(path);     //path module is object 

let extensionName = path.extname("C:\Users\karis\OneDrive\Desktop\Tutorial of frontend\Node\path.js")
console.log(extensionName);      //give extension of file 

let baseName = path.basename(__filename);
console.log(baseName);          //give name of file --filename.extension
//path of  whole directory 
let directory  = path.dirname(__dirname); 

console.log(directory);
//another way to get path of directory in which this file lies
console.log(__dirname);//path of  that directory only  in which we using this function of in the file [suppose here path.js we using dirname function that gives only that directory path in which path.js file lies ] 

//path of file ex-->    C:\Users\karis\OneDrive\Desktop\Tutorial of frontend\HTML.html\learnjs.html 
console.log(__filename);

let newFilePath = path.join(directory, "childfile.js");
console.log(newFilePath);    //join the file name with directory 