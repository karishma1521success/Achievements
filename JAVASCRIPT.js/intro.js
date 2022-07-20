// journey to learn javascript

// inline js- html mai tag ke baad <script>  
// external js- <script src=fileName.js></script> 

// INTRODUCTION OF JS

// dom mai root element html hota hai document and other elements hote hai objectttT    5

//OUTPUT IN JAVASCRIPT    //console.log is called logging
console.log("WElCOME TO THE WORLD OF JAVASCRIPT");
let a = 5;
//output in js is shown by console.log with (" "); 
console.log(a); //print or output any variable with no double quotes write variable as it is inside paranthesis.
console.log("welcome " +a); //way to print text as well as variable with + sign.

//VARIABLE IN JS
 let num = 5;            
 let char='a';
 let float= 14.4;
 let string= "hello this is karishma";
 let boolean= true;

 // take automatically datatype in js there is no need to tell type of data declare with syntax
 // [ let variablename = value;]

 console.log(num, char, float, string, boolean);// way to print many variables in single console.log

 //DECESION MAKING STATEMENT IN JS(IF , IFELSE )
 let num1=4;
 if(num1%2==0){
    console.log("even");

 }else{
    console.log("odd");
 }

 //LOOP IN JS
 for(let i=1; i<=2; i++ ){
 console.log(i);
 }

 let i=1;
 while(i<=5){
    console.log(i);
    i++
 }

 //FUNCTION IN JAVASCRIPT  - function is block of staments that performs specific task and can be call as often as we want        
 /* SYNTAX - function functionName(){ logic }    note- f is small in keyword in function (can contain parameters and return value )
 CALL OF FUNCTION - functionName();   always call function in js by with  functionName(); 
 */


 //function without parameters and return value
function print(){
    console.log("karishma");
}
//calling of function without parameters and return value
print();

// function with parameters
function Sum(num1, num2 , num3){
    let addtion = num1+num2+num3;
    console.log("sum of three numbers are "+addtion);
}
//calling of function with parameters 
Sum(3,5,2);

//function with parameters and return values
function sum(num1, num2){
    return num1+num2;               //return keyword returns the value and terminates the block as well at same time      statements after return will not executed
}
// calling of function with return values
// let x= sum(2,3);
console.log(sum(2,2));
 
//storing a function in variable      FUNCTION IN JS IS ALSO CALLED FIRST CLASS CITIZEN IN JS BECAUSE CAN BE STORED IN VARIABLE
let func1 = function sum(num1, num2){
                return num1+num2;
            }
        
       
       console.log(func1(3,5));


    function multiply(a, b, c, d, e){
        return a*b*c*d*e;
    }   
console.log(multiply(1,2,3,1,3));


//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
 
(function(){
console.log("hello function of IIFE")                 //IIFE FUNCTION WITHOUT PARAMETERS
})();

(function(num1, num2){
    let sum=num1+num2;                                //IIFE FUNCTION WITH PARAMETERS
    console.log(sum+ "sum with IIFE function")
})(3,5);


//ARRAY IN JS -  based on 0 index 

// DECLARATION OF ARRAY IN JS
 
//EMPTY ARRAY IN JAVASCRIPT
let arr=[];              //same as variable declared but after= use []
console.log(arr);       //same as variable print 

//ARRAY IN JAVASCRIPT WITH ELEMENTS
let array1=[4,true,2,"hello i am karishma ", 'a',12.3];  //IN JS SIMILIAR OR DIFFERNT TYPE OF VALUES CAN BE STORED 
console.log(array1);

//TO PRINT OR OUTPUT ONE ELEMENT OF AN ARRAY
console.log(array1[3]);
console.log(array1[1]);

// TO CHANGE ELEMENT VALUE OF AN ARRAY
array1[2]= "nothing";
console.log(array1);

//ARRAY METHODS/FUNCTIONS        changes actual array
//1.PUSH METHOD   --> syntax   arrayName.push(parameter);   used to add element at last of an array
 
array1.push("new element add by push method of an array");
array1.push(2);                                     //take paramters
console.log(array1);

//2. POP METHOD    --> SYNTAX  arrayName.pop();     used to remove last element from  an array
array1.pop();                                      // don't take parameters 
console.log(array1);    

//3. SHIFT METHOD  --> SYNTAX arrayName.shift();   used to remove starting element from an array
array1.shift();                                    //don't take parameters
console.log(array1);

//4. UNSHIFT METHOD --> SYNTAX  arrayName.unshift(parameter)  used to add element at start of an array
array1.unshift("new element by unshift method"); 
console.log(array1);

//ARRAY LENGTH PROPERTY
// sytax - arrayName.length; means variablename.length

let arrlength= array1.length;          //print length of array with using variable
console.log(arrlength);                // print length of an array without using variable means direct
console.log(array1.length);


//STRING IN JAVASCRIPT       
let str="Hello i am string";            //declare same as variable
console.log(str);

let string1 = "java";
let string2 = "script";
//concatenate
console.log(string1 + string2 + " another string");



//LENGTH OF STRING IN JS          syntax-> variableName.length;
let strlength=str.length;
console.log(strlength);                     //length of string can be print with and without/direct variables
console.log(str.length);

//STRING METHODS/FUNCTIONS {doesn't change actual string}

//1.SLICE METHOD                      //used to extract a part of an array
let sliced =str.slice(2,8);          //requiered parameters (first index include and second index not include)
console.log(sliced);
console.log(str.slice(2,8));       
console.log(str);

//2. REPLACE METHOD /FUNCTION        used to replace a word to another given word
 let replaced= str.replace("i","me");
 console.log(replaced);
 console.log(str.replace("hello", "bye"));
 console.log(str);                      //doesn't change actual string


 //3.UPPERCASE METHOD/FUNCTION
 let upper=str.toUpperCase();
 console.log(upper);
 console.log(str.toUpperCase());
 console.log(str);                      

 //4. LOWERCASE METHOD/FUNCTION
 let lower= str.toLowerCase();
 console.log(lower);
 console.log(str.toLowerCase());
 console.log(str);


 // charAt()
 let word = "hello";
 console.log(word.charAt(0));

 //5. CONCAT
 let firstName= "karishma";
 let lastName= " gupta"
let fullname= firstName.concat(lastName); 
console.log(fullname);

let fullName=firstName+lastName;
console.log(fullName);  

let str1= "hello i am string 1";
let str2= " hello i am string 2";
console.log(str1.concat(str2));

//object are mutable means we can add   in run time
//OBJECT IN JS -- OBJECT IN JS IS A KEY - VALUE PAIR 
//SYNTAX -- let varibleName = { key:value, ....}    note - key is always a string by default and value can be of any data type.

//object without elements
let objectWithoutElements= {};
console.log(objectWithoutElements);

//object with elements     note-- better use unique key and use double quotes for good practice
let object1 = {
    name: "karishma",           //string, number .float, 
    "age": 19,
    "hobby": 2.2, 
    passion: 'a',
    friends: ["anisha", "manya", "ananya"],    // array
    address: {
        state:"up",                          // object
        city: "agra"
    },
    saybye: function(){                   //functionn
        console.log("hello bye");
    },
    adult: true                       //boolean

    
};
console.log(object1);      // calling whole object 
// to print access key of object then syntax --> 1. method-- > console.log(objectName.key); 2. method--> console.log(objectName["key"]);
console.log(object1.name);
console.log(object1["name"]);
console.log(object1.age);    
console.log(object1["age"]);
console.log(object1["hobby"]);
console.log(object1.hobby);
console.log(object1.friends);
console.log(object1.friends[0]);               //acess  one element of array of object
console.log(object1["friends"][0]);           //acess one element of friends array by 2. method
console.log(object1.address);
console.log(object1.address.city);               //acess one value of object of object
console.log(object1["address"]["state"]);
// console.log(object1.saybye());                  //acess of function but this give undefined due to console.log
object1.saybye();                   // for output function --> objectName.key();
console.log(object1);

//ADDING KEY:VALUE TO AN OBJECT  syntax --> objectVariableName.key=value;
object1.movie="villan";
object1.number=4;
console.log(object1);

//DELETE AN KEY FROM AN OBJECT  syntax --> delete object.key;
delete object1.movie;
console.log(object1);

//TO UPDATE ANY VALUE OF KEY IN OBJECT SYNTAX --> objectVariableName.key=value;
object1.name="karishma gupta";
object1.friends[0]="karishma";
object1.address.city="Mumbai";
console.log(object1);


// loop in object  == for..in loop       syntax for(let key in objectName){console.log(key,objectName[key]);}
for(let key in object1){
    console.log(key, object1[key]);
}
//loop in object == for..of loop 
for(let key of Object.keys(object1)){
    console.log(key, object1[key]);
}

//problem- getting error in function printing by adding delete, update of key before this fuction is printing but after not
// two types of object function  -- factory function and constructor function
//factory function == if we want to create many object then no need to declare all make a factory function and keep that object inside function block
// Syntax -- function functionName(){  return {object}   }
function createCourse(title){
    return {
        "title":title,
        "enroll" : function(){
            console.log("enrolled to course");
        } 
    }

}
let course = createCourse("karishma");
// console.log(course.enroll());   //this gives undefined because we have console.log
course.enroll();
console.log(course.title);

//constructor function      syntax -- function FunctionName(){
            //   this.key = value,   this- keyword
            //   this.key = value
// }
        //pascal convention and name of constructor is same as class name
function CreateCourse(name){
    this.title = "web development";
    this.name= name,
    this.readme = function(){
        console.log("read me this web development book for getting your carrer good")
    }
}
//so it is the constructor function we would use new keyword to call this function
let course1= new CreateCourse("karishma");
console.log(course1.name);



//primitive datatype - integer, boolean, char, float, string

let int = 10;
let b = a ;   // pass by value
a = 13; // b pr koi change nhi aayegaa jb a hum overwrite kr rhe hai b ko intitialize krne ke baad

//reference datatype -- array, object , function
let obj= { name:"karishma"};
//pass by reference        isme location store hoti hai variable ki na ki value ( obj change krne pr bhi obj2 bhi change huaa hai)
let obj2 = obj;
obj.name = "sachin";   //at this we change the obj but it also effect obj2 because it is pass by reference
console.log(obj2);


// reference datatype by pass by value

let refbyvalue = {
    age: 24,
    weight: 40

}
  // method 1 
//   let refbyvalue2 = {...refbyvalue};     // way to pass by value of reference data type    (if we use pass by reference then age will reflect 89)
  // method 2
  let refbyvalue2 = Object.assign({},refbyvalue , obj);  //another method to use reference data type by pass by value    syntax   let variableName = Object.assign({}, object , objec1);    can assign many objects
refbyvalue.age = 89;
console.log(refbyvalue2);


//CLASSES IN JAVASCRIPT
// SYNTAX --     class ClassName {
    //       constructor(parameter, parameter, input){
//            this.key = value,            
//             this.key = value
//
//                     }                 
//            }

//  let variableName = new ClassName(parameter,parameter, input);

class SumClass {
    constructor(a, b, c, d){
        this.num1 = a,
        this.num2 = b,
        this.num3 = c,
        this.num4 = d

    }
}
let sum1 = new SumClass(8,7,6,7);
console.log(sum1);