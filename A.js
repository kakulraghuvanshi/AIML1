console.log("=====Variables=====");

var text = "Kakul Raghuvanshi";
console.log(text);





console.log("\n===== If Else =====");

var a = 40;
var b = 30;

if(a<b){
    console.log("A is greater, value of A = ",a);
}
else{
    console.log("B is greater, value of B = ",b)
}







console.log("\n===== Function =====");
function abes(){
    console.log("Welcome Students");
    console.log("Welcome to Node.js");
}
abes();
abes();






console.log("\n===== Function with Parameters =====");

function greet(fname, lname){
    console.log("Hello", fname, lname);
}

greet("Utkarsh", "Dixit");
greet("Waseem", "Sir");





console.log("\n===== Function Return =====");

function add(x, y){
    return x + y;
}

var result = add(20, 30);

console.log("Sum = ",result);







console.log("\n===== Default Arguments =====");

function fullName(fname = "ABES", lname = "Engineering College"){
    return fname + " " + lname;
}

console.log(fullName());

console.log(fullName("Utkarsh", "Dixit"));







console.log("\n===== Percentage =====");

function totalMarks(math, english, science){
    return math + english + science;
}

function percentage(total){
    return (total/300)*100;
}

var total = totalMarks(100, 90, 95);
var percentvalue = percentage(total);
console.log("Total Marks = ", total);
console.log("Percentage = ", percentage(total) + "%");