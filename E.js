// Class without a constructor
class A {
    name = "Kakul";

    show() {
        console.log("My name is " + this.name);
    }
}

let obj = new A();
obj.show();

// Class with a constructor
class AA {
    constructor(name) {
        this.name = name;
        console.log("My name is " + this.name);
    }
}

let obj1 = new AA("Prabal");

// Class without a constructor
class Hello2 {
    faculty = "Utkarsh";
}

let h2 = new Hello2();
console.log(h2.faculty);

// Student class with a constructor
class Student {
    constructor(name, roll, address, mobileNumber) {
        this.name = name;
        this.roll = roll;
        this.address = address;
        this.mobileNumber = mobileNumber;

        console.log("My name is " + this.name);
        console.log("My roll number is " + this.roll);
        console.log("My address is " + this.address);
        console.log("My mobile number is " + this.mobileNumber);
    }
}

let s1 = new Student("Kakul", 101, "Muzaffarnagar", 1234567890);
let s2 = new Student("Prabal", 102, "Muzaffarnagar", 1234556789);
let s3 = new Student("Utkarsh", 103, "Ghaziabad", 1234567890);
let s4 = new Student("Tanishq", 104, "Muzaffarnagar", 1234567890);
let s5 = new Student("Manit", 105, "Ghaziabad", 1234567890);

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);



//static property and method
class Hello3{
    static name = "Example of static variable and method";
    static show(){
        console.log("Hello class this is "+Hello3.name);
    }
}
Hello3.show();


//static method
class Hello5{
    static name="Example of static method with instance variable";
    constructor(){
        this.instanceVar="Instance variable";
    }
    show(){
        console.log("Static Variable: "+Hello5.name);
        console.log("Instance Variable: "+this.instanceVar);
    }
}
let h5=new Hello5();
h5.show();


class student2{
    static name="Kakul";
    static lastName="Raghuvanshi";
    show(){
        console.log(`firstname: ${student2.name}`);
        console.log(`lastname: ${student2.lastName}`);

    }
}
let s=new student2();
s.show();
