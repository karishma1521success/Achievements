
 let btnjs = document.querySelector('button');   // this is for selecting the html element on which we have to add js
 btnjs.addEventListener('click', showMsg);

//  function showMsg(){
//     alert("Namaste world");

//  }

//input
// function showMsg(){
// let inputjs = prompt("Enter your name");   //pop up with show msg enter your name
// btnjs.textContent = "hello" +inputjs;
// alert("hello" + inputjs);
// }


function showMsg(){
   let input = prompt("your age ");   // prompt is just a pop with show message and takes input form the user
   if(input<=18){
   alert("teenager");
   }else if(input<40){
   alert("adult");

   }else{
      alert("old");
   }

}

let headingjs = document.querySelector("h1");
headingjs.addEventListener('click' , headingMsg);

 function headingMsg(){
   let time = prompt('whats the time: ');
   if(time>= 5 && time<= 12){             // condiitional statements
      alert("Good morning");

   }else if (time>= 12 && time<=17){
      alert(" Good afternoon");
   } else if (time<=21){
      alert("Good evening");
   }else {
      alert(" Good night");
   }
 }

 let fruitName = document.querySelector("h2");
 fruitName.addEventListener("click" , fruitType);

 function fruitType(){
    let fruit = prompt("enter the fruit name ");
    switch (fruit) {
        case "mango":
            alert("mango");
            break;
        case "banana":
            alert("banana");
            break;

        case "apple":
            alert("apple");
            break;
        default: 
        alert("not available");
    }
 }


 