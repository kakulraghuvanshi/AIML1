console.log("=====String Methods=====");
let str = "Welcome JavaScript";
console.log("Upper Case = ",str.toUpperCase());
console.log("Lower Case = ",str.toLowerCase());
console.log("Character at index 3 = ",str.charAt(3));
console.log("Index of Java = ",str.indexOf("Java"));

let message = "JavaScript is easy. JavaScript is powerful.";
console.log(
    "Last Index = ",
    message.lastIndexOf("JavaScript")
);
console.log(
    "Slice = ",
    str.slice(0,7)
);
let data = "HTML,CSS,JavaScript";
let result = data.split(",");
console.log("split = ",result);

let text = "I love Java";
console.log(
    text.replace("Java","JavaScript")
);

let first = "Kakul";
let last = "Raghuvanshi";
console.log(
    first.concat(" ",last)
);


console.log("\n====INCLUDES====");
let course = "JavaScript";
console.log(
    course.includes("Script")
);
console.log(
    course.includes("Python")
);

console.log("\n====Array Objects====");
let numbers = [10,20,30,40,50];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[4]);

console.log("\n====Array Methods====");
numbers.push(60);
console.log("After push = ",numbers);
numbers.pop();
console.log("After pop = ",numbers);
numbers.unshift(5);
console.log("After unshift = ",numbers);
numbers.shift();
console.log("After shift = ",numbers);



console.log("\n====Date====");
let date = new Date();

console.log(date);

console.log(
    "Year = ",
    date.getFullYear()
);
console.log(
    "Month = ",
    date.getMonth()
);
console.log(
    "Date = ",
    date.getDate()
);


console.log("\n====Maths Object====");
console.log("PI: ",Math.PI);
console.log(
    "Square Root: ",
    Math.sqrt(16)
);

console.log(
    "Minimum: ",
    Math.min(16,34,78)
);

console.log(
    "Maximum: ",
    Math.max(16,34,78)
);

console.log(
    "Round: ",
    Math.round(8.9)
);

console.log(
    "Floor: ",
    Math.floor(2.6)
);

console.log(
    "Ceil: ",
    Math.ceil(2.6)
);

console.log(
    "Power: ",
    Math.pow(4,3)
);
