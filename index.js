//************* Chapter_1 Alert *****************//
/*
function show(){
    alert("Error! Please enter a valid password");
    alert("Welcome to JS Land...\n Happy Coding");
alert("Welcome to JS Land...");
alert("Prevent this page from creating additional dialog")
}
*/
//************* Chapter_2 Variables for strings *****************//
/*

function show(){
    var userName="Rashid";
    var message="Hello World";
    var piz="pizza\n pizz \n piz\n pi\n p "

var email="My email address is Rashid@gmail.com"
    alert(userName);
    alert(message);
    alert(piz);
    alert(email)
}



var content = document.getElementById("main")
content.innerText="Yeah! I can write HTML content Through JavaScript";


*/

//************* Chapter_3 Variables for numbers *****************//

/*
function show(){
    var age=25;
    var visit=31;
    var message ="you have visited " + visit + " this site " + age + " times";
    alert (message)

    
}
var year=1995
var content = document.getElementById("main")
    content.innerText="My birth year is "+year;


    var name="Jhon Doe";
    var product_title="T-Shirts"
    var quantity=5;

 

    var text = document.getElementById("text")
  var ordered=name+ " ordered "+ quantity+ " "+ product_title +" on Clothing store"
    text.innerText=ordered;
*/

//************* Chapter_4 Variables Name legal & illegal *****************//

/*
var $name="Rashid"
console.log($name)

*/
//************* Chapter_5 Math Expressions *****************//
/*
var a=10;
var b=7;
var sum=a+b;
var minus=a-b;
var multi=a*b;
var divide=a/b;

console.log(sum);
console.log(minus);
console.log(multi);
console.log(divide);


var v=5;

console.log(v);

v++;
console.log(v)

//var v=v+6
var v=v+7;
console.log(v)
--v;

v=v/4;
console.log(v)


var cost=600;
var ticket =5;
var result=cost*ticket;

var message =document.getElementById("text");
message.innerText="Total cost to buy " +ticket+ " tickets to a movie is " +result+ " PKR";


//var num=4;

//for(i=1;i<=10;i++){  console.log(i+" *","4"," = "+i*4)}


function Table(){

    var usernumber = document.getElementById("usernumber").value;
    var i=1;
    var result='';
    for(i=1;i<10;i++){
        var multi = parseInt(usernumber) * parseInt(i);
        result+= usernumber+ " x " + i + "=" + multi + `</br>`;  
   //var dd= document.getElementById("table");
  
   // dd.innerHTML= usernumber+"x" +i+ "=" + multi;
    
    }
    document.getElementById("table").innerHTML=result;
}
    var one=650;
    var two=100;
    var q1=3;
    var q2=7;
    var charges = 100;
    var cost =one*q1+two*q2+charges;

    var item1=document.getElementById("item1");
    item1.innerText=" Price of item 1 is " +one;

    var item2=document.getElementById("item2");
    item2.innerText=" Price of item 2 is " +two;


    var ff = document.getElementById("cost");
    ff.innerText=" Total Cost  of Your order is "+cost;
*/

//************* Chapter_6 to 9 Math Expressions *****************//
/*
var a=10;
++a;
console.log(a);
a++;
console.log(a);
--a;
console.log(a);
a--;
console.log(a);
*/
/*
var a =2; var b=1;
--a;
console.log(a); //1
--a - --b; 
console.log(a);
console.log(b);
--a - --b + ++b;
console.log(a);
console.log(b);
--a - --b + ++b + b--;
console.log(a);
console.log(b);
*/

/*

function display(){
    var usernumber = document.getElementById("usernumber").value;
   // console.log(usernumber);

    var number =document.getElementById("number");
    number.innerText=usernumber;
    var result="";

    if(usernumber === "" || isNaN (usernumber)){

        usernumber=5;
    }
 
    for(var i=1;i<=10;i++){
       
        var multi = parseInt(usernumber) * parseInt(i);
        result+= usernumber+ " x " + i + "=" + multi + `</br>`;  
        console.log(result);
    }
    document.getElementById("number").innerHTML=result;

}

*/
//************* Chapter_9 to 11 User Input && conditional statement *****************//

/*
// 1
var takeInput=prompt("Enter the value ","Type Here");

console.log(takeInput)


if( takeInput.toLowerCase() === "karachi"){
   alert("The City of light")
}
*/


/*
// 2
if(takeInput.toLowerCase()==="men"){
    alert("Hello sir")
}

else{
    takeInput.toLowerCase() === "girl"
    alert("Hello mam")
}
*/


/*
// 3

function display(){

var input = prompt("Enter the Value");
console.log(input);

if(input.toLowerCase()=== "red"){
    alert("Must Stop")
}
else if(input.toLowerCase()==="yellow"){
   alert("Ready to move")
}

else if(input.toLowerCase()==="green"){
    alert("Move Now")
}

}

*/
//4
/*function display(){
    var input = prompt("Enter the Value");
    console.log(input);

    if(input <0.25){
        alert("Please refill the fuel in Your Car")
    }
    else{
        alert("Good Night")
    }
}
*/

// 6
/*
  var heading = document.getElementById("heading")
  heading.innerText="Mark sheet"
function display(){
    var eng = +prompt("Enter the Value","Type here");
    console.log(eng);
    var urd = +prompt("Enter the Value");
    console.log(urd);
    var isl = +prompt("Enter the Value");
    console.log(isl);
    
    var plus=eng+urd+isl;
    console.log(plus);
   var marks = document.getElementById("marks")
   marks.innerText="Marks : "+plus;

   var perc=Math.ceil((plus/300)*100);
   console.log(perc)

   var percentage = document.getElementById("perc")
   percentage.innerText= "Percentage :"+perc;
   var garde =document.getElementById("grade");

   var comments =document.getElementById("comm");


  
if(perc >=80 && perc <=100){
    alert("A_One")
garde.innerText="Grade : "+"A_One"
comments.innerText="Remarks : "+"Excellent";

}
else if( perc >=70 && perc <=80){
    alert("A")
    garde.innerText="Grade : "+"A"
    comments.innerText="Remarks : "+"Good";
}
else if( perc >=60 && perc <=70){
    alert("B")
    garde.innerText="Grade : "+"B"
    comments.innerText="Remarks : "+"You Need To Improve";
}

else if( perc < 60){
    alert("Fail")
garde.innerText="Grade : "+"Fail"
comments.innerText= "Remarks : "+"Sorry";
}
}
*/

//7
/*
function game(){
    var input = prompt("Enter the Value");
    console.log("user====>>",input);

    var secrate_Number = Math.floor (Math.random()*10)+1;
    console.log("Guess number",secrate_Number)
    
if(input === secrate_Number ){
    alert("Bingo! Correct Answer")
}
else { alert("Sorry, wrong guess. The correct answer was " + secrate_Number); }

}
*/
//8
 /*   
function divisible(){
    var input =prompt("Enter the value");
    console.log(input)
    if(input % 3 === 0){
        console.log("True")
    }
    else{
        console.log("false")
    }
}
*/

//9
   /*
function divisible(){
    var input =+prompt("Enter the value");
    //console.log(input)
    var num=input;
    
    if(!isNaN(num)){
        if(num % 2 === 0){
            alert(num +"even")
         }
         else{
             alert(num +"odd")
         }

    }
    else{
        alert("Invalid input. Please enter a valid number.");
    }
   
}

*/
//11 
/*
function math(){
    var first =+prompt("Enter the value");
    console.log(first)
    var second =+prompt("Enter the value");
    console.log(second)
    var operation = prompt("Enter the operation (+, -, *, /, %):");
    var result;
    if(!isNaN(first) && !isNaN(second)){

        switch (operation)
        {
            case "+":
result=first+second; 
console.log(result)
break
case "-":
result=first-second; 
console.log(result)
break
case "*":
result=first*second; 
console.log(result)
break
case "/":
result=second !==0 ? first/second : "Error division by 0"
console.log(result)
break

case "%":
result= second!== 0 ? first/second :"Error modulus by 0"
console.log(result)
break
default:
        result = "Error: Invalid operation"; break;
        }
        alert(result)
    }
    else{
        alert("Invalid input. Please enter a valid number.");
    }
}


*/
//************* Chapter_12 to 13 IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION *****************//
/*
1-Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).*/

/*
let input = prompt('Enter a number or uppercase or lowercase letter');

let charCode = input.charCodeAt(0);

console.log(charCode)


if(input>='0' && input <= '9'){
    alert("Number")
}
else if(charCode>=65 && charCode<= 90){
    alert("UpperCase")
}

else if(charCode>=97 && charCode<= 122){
    alert("LowerCase")
}
else{
    alert("Special character")
}

*/
/*2-Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.*/

/*
let first_num = +prompt('Enter a number');
let second_num = +prompt('Enter a number');

if(first_num>second_num){
    alert("First Number is large ")
}
else if(second_num>first_num){
    alert("second number is large")
}
else if(first_num=== second_num){
    alert("Number are equal")
}
*/
/*3-Write a program that takes input a number from user &
state whether the number is positive, negative or zero.*/
/*
let input = +prompt('Enter a number');


if(input>0){
    alert("positve")
}
else if(input<0){
    alert("negaitve")
}
else if(input===0){
    alert("Number is zero")
}
else{
    alert("Error Plz correct integer input")
}

*/

/*4-Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise*/

/*var  input = prompt('Enter a number');

var char = input.toLowerCase();


if( char ==="a" || char ==="e" || char==="i" || char === "o" || char==="u"){
    alert("Vowel")
}
else {
    alert("alphabet")
}
*/


/*5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.*/
/*
function passwordChecked(){
var password ="1234"
var input =document.getElementById("input").value;
console.log(input)
if(input === password){
    alert ("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password")
}

}
*/
//************* Chapter_14 to 16 Arrays *****************//

/*
var stud=[];
var stud=new Array();
var stud=["a","b","c"];
var number =[1,2,3,4];
var mixed_array=["a",112,true];

var q=["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
*/

/*Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:*/ 
/*
var student=["Ahmed","Hadiii","Zain"];
var total_marks=500;
var score=[250,300,450];

var percentage=(score[0]/total_marks)*100;
console.log("Score of "+student[0] +"is" +" Percentage "+percentage);
var percentage=(score[1]/total_marks)*100;
console.log("Score of "+student[1] +"is" +" Percentage "+percentage);
var percentage=(score[2]/total_marks)*100;
console.log("Score of "+student[1] +"is" +" Percentage "+percentage);
*/
/*
for(var i=0;i<student.length;i++){
    var percentage= (score[i]/total_marks)*100; //nan
    console.log("score of "+student[i]+" is " +score[i] + " Percentage" +percentage);
}

*/

/*9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/
/*
var colors= ["blue","white","green"]

console.log(colors);

colors.unshift("red","light-green");

console.log(colors);

colors.push("pink","light_pink");
console.log(colors);

colors.shift();
console.log(colors);

colors.pop();
console.log(colors)

colors.splice(1,0,"lemon","black")
console.log(colors);

//['light-green', 'lemon', 'black', 'blue', 'white', 'green', 'pink']
colors.splice(2,4);
console.log(colors)
*/


/* 10-Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.*/
/*
var student=[320,230,480,120]

student.sort();

console.log(student)


/* 11-Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.*/ 
//var cities_list=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
//console.log(cities_list.slice(0,2))

/* 12 Write a program to create a single string from the
below mentioned array:*/


/*
var arr = ["This","is","my","cat"]
var result=arr.join();
var res=arr.join(" ");
console.log(result)
console.log(res)
*/


//************* Chapter_26 to 30 Math Method *****************//

/*1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
/*
var number =1234.905;

console.log("number",number)
console.log("round",Math.round(number))
console.log("Floor",Math.floor(number))
console.log("Ceil",Math.ceil(number))
*/

/*6. Write a program that shows a random number between 1
and 100 in your browser.*/
/*
var random=Math.floor(Math.random()*100)+1
console.log(random)

*/

/*8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.*/
/*
var user =4;
var random =Math.floor(Math.random()*10);
console.log(random)


if(user === random){
    alert("congratulte!")
}
else{
    alert("Try again")
}
*/

//************* Chapter_31 to 34 Date Method *****************//
/*1. Write a program that displays current date and time in
your browser.*/
/*
var date =new Date();
console.log(date)
*/

/*2. Write a program that alerts the current month in words.
For example December.*/
/*const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];
var date =new Date();
var month=date.getMonth();
console.log(monthNames[month])
*/
/*3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun.*/
/*var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date =new Date();

var day =date.getDay();

console.log(dayNames[day])
*/

/*Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today.*/
/*
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date =new Date();

var day =date.getDay();

var today=dayNames[day];
console.log(today)


if(today === "Sat" || today ==="Sun" ){
    console.log("it's Fun day")
}
*/

/*5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.*/

/*
var date =new Date();

var day = date.getDate();
console.log(day)

if(day <15 ){
    console.log("“First fifteen days of the month”")
}
else{
    console.log("“Last fifteen days of the month”")
}
*/

/* 7- Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”.*/
/*
var date =new Date();

 var hours = date.getHours();

 if(hours<12){
    console.log("AM")
 }
 else {
    console.log("PM")
 }

*/
/*Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015*/
/*
var date = new Date();
var  ramazan = new Date("28 February 2025");

var today= date.getTime();
console.log(today)

var ramazan_time=ramazan.getTime();
console.log(ramazan_time)

var diff=ramazan_time-today;
console.log(diff)

var d_diff= diff/(1000 * 60 * 60 * 24);

var floor = Math.floor(d_diff);
console.log("Days ==>",floor +" days have passed since 1st Ramadan, 2025" )

*/

//************* Chapter_43 to 48 Events *****************//
/*1. Show an alert box on click on a link.*/
/*2-Display some Mobile images in browser. On click on an
image Show the message in alert to user.*/
/*function show(){
    alert("Show");
}
*/
/*
function display(mobile_name){
    alert("you clicked  on "+mobile_name);
}

*/

/*3. Display 10 student records in table and each row should contain a delete
button. If you click on a button to delete a record, entire row should be
deleted.*/
/*
function Delete(){

    var id=event.target.parentNode.parentNode;
    console.log(id.remove())
}

*/
/*4. Display an image in browser. Change the picture on mouseover and set the
first picture on mouseout.*/


/*5. Show a counter in browser. Counter should increase on click on increase
button and decrease on click on decrease button. And show updated counter
value in browser.*/
/*
var count=0;

function increase(){
    
count++;
console.log(count)
}

function decrease(){
    count--;
    console.log(count)
}

function update(){
   count=0;
    console.log(count)
}
*/

//************* Chapter_49 to 52 Events *****************//
/*1. Create a signup form and display form data in your web
page on submission.*/

/*
function signup(){

    var name=document.getElementById("name");
    console.log(name);
    
    var email=document.getElementById("email");
    console.log(email)
    event.preventDefault();

    if(name.value.trim() && email.value.trim() ){
        var output=`<p>${name.value}</p>
        <p>${email.value}</p>`

        document.getElementById("output").innerHTML=output;
       
        document.getElementById("sign").reset();
   
    }
    else{
        alert("Please Enter valid value")
    }
}

*/



/*2. Suppose in your webpage there is content area in which
you have entered your item details, but user can only see
some details on first look. When user clicks on “Read
more” button, full detail of that particular item will be
displayed.*/
/*

function expandText(){
    var shortText="Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.";
    var text="Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";

    var para=document.getElementById("para");
    var link =document.getElementById("link");
   
   
    if(link.innerHTML === "See more"){
        para.innerHTML=text;
        link.innerHTML="See less";
    }
  else{
    para.innerHTML=shortText;
        link.innerHTML="See more";
  }
}
*/

/*3. In previous assignment you have created a tabular data
using javascript. Let’s modify that. Create a form which
takes student’s details and show each student detail in
table. Each row of table must contain a delete button and
an edit button. On click on delete button entire row should
be deleted. On click on edit button, a hidden form will
appear with the values of that row.*/

/*
function AddtoStudent(){
    var name_input=document.getElementById("name");
    var email_input=document.getElementById("email");
    var age_input =document.getElementById("age");    
    var list =document.getElementById("list");
    list.innerHTML+=`<li> <input type="text" 
    value=' ${name_input.value}  ${ email_input.value}  ${age_input.value} ' disabled/>   
    <button onClick="deleteStudent()">Delete</button>  <button onClick="editStudent(event)">Edit</button></li>`;
    clear();

}
 
function  deleteStudent(){

    var st_delete= event.target.parentNode.remove();
    console.log(st_delete)
}

function DeleteAll(){

    list.innerHTML="";
}


function editStudent(event){

    var input= event.target.parentNode.childNodes[1];
    input.disabled=false;
    input.focus()
    event.target.innerHTML="Update"
    event.target.setAttribute("onclick","updateStudent(event)")
}

function updateStudent(event){

    var input =event.target.parentNode.childNodes[1];
    input.disabled=true
     event.target.innerHTML="Edit"
}



function clear(){
 document.getElementById("name").value="";
   document.getElementById("email").value="";
   document.getElementById("age").value=""; 
}



function addToEnter(){
    if(event.keyCode === 13){
        AddtoStudent();
    }

}

*/