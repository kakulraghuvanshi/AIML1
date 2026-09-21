const a={
    id:101,
    name:"Utkarsh",
    show:function(){
        console.log("Id: ", this.id);
        console.log("Name: ", this.name);
    }
}


let d={
    marks: 75,
    grad:"A",
    modify:function(){
        this.marks=this.marks+5;
        this.grad=this.grad+"+";
        console.log("Marks: ", this.marks);
        console.log("Grade: ", this.grad);
    }
}


let b={
    name:"Aman",
    marks:70,
    modify:function(){
        this.marks=this.marks+5;
        console.log("Marks: ", this.marks);
    }
}


function show(){
    console.log("My address is: "+ this.address);
    console.log("My city is: "+ this.city);
}
e={ address:"ABES COLLEGE",
    City:"Ghaziabad",
    show:show
};
f={ address:"COLLEGE OF ENGINEERING NEAR CROSSING REPUBLIC",
    City:"Ghaziabad",
    show:show
};
e.show();
f.show();



//question
function clg(){
    console.log("Name is: "+ this.name);
    console.log("ID: "+ this.id);
}
dep={ name:"CSE-AIML",
    id:101,
    show:clg
};

