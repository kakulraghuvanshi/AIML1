class student{
    constructor(name, roll,marks){
        this.name=name;
        this.roll=roll;
        this.marks=marks;
    }
    displayResult(){
        console.log(`Name: ${this.name}, Roll: ${this.roll}, Marks: ${this.marks}`);
    }
}
let s1=new student("Kakul",101,90);
s1.displayResult();