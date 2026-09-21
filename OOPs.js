class employee{
    constructor(id,name,basicSalary){
        this.id=id;
        this.name=name;
        this.basicSalary=basicSalary;
    }
    //method
    calculateSalary(){
        return this.basicSalary;
    }
}
//derived class
class manager extends employee{
    constructor(id,name,basicSalary,incentive){
        super(id,name,basicSalary);
        this.incentive=incentive;
    }
    // method overriding
    calculateSalary(){
        return this.basicSalary+this.incentive;
    }
}
//creating employee object
let e1=new employee(101,"Kakul",50000);
let e2=new employee(102,"Tanishq",30000);
let m1=new manager(103,"Prabal",60000,10000);
console.log("Employee Salary: "+e1.calculateSalary());
console.log("Employee Salary: "+e2.calculateSalary());
console.log("Manager Salary: "+m1.calculateSalary());



//call by function
function greetUser(name,callback){
    console.log("Hello "+name);
    callback();
}

greetUser("Kakul",function(){
    console.log("Callback function executed");
});

console.log("Start")
setTimeout(function( ){
    console.log("Task Completed")
},2000)

console.log("End")



//Synchronous
console.log(10)
console.log(20)
console.log(30)
console.log(40)
console.log(50)

//Async
console.log("Start");

setTimeout(function(){
    console.log("Middle");
},2000);

console.log("End");

