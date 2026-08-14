// let arr = [10,20,30,40,50];
// let sum = 0;
// for(let index = 0; inder<arr.length; index++){

// }






let students = [
    ["Kakul", "Raghvanshi", "18", "9.65"],
    ["Jasleen", "Kaur", "19", "9.6"],
    ["Kumkum", "Vishwakarma", "20", "9.5"]
];

console.log(students);







console.log("\n===== Object =====");
const student = {
    id:101,
    name:"Utkarsh",
    course:"Node.js"
};
console.log(student);
console.log(student.name);




const user = [
    {
        id:1,
        name:"Kakul"
    },
    {
        id:2,
        name:"Shailly"
    },
    {
        id:3,
        name:"Anushka"
    }
];
console.log(user);




const employee = {
    id: 101,
    name: "Utkarsh",
    department: "CSE-AIML",
    
    display: function(){
        console.log("Id: ", this.id);
        console.log("Nmae: ", this.name);
        console.log("Department: ", this.department);
    }
};

console.log(employee);

