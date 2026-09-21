let student = {
    name: "Kakul",
    marks: 90,
    grade: "A",
    updateGrade: function(){
        this.grade = "A+";
    }
};
console.log("Before updating grade: ", student.grade);
student.updateGrade();
console.log("After updating grade: ", student.grade);