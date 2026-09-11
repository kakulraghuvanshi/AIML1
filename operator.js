function addNumbers(...numbers){
    console.log(numbers);
}
addNumbers(10,20,30,40);




function sum(...nums){
    let total = 0;
    for(let num of nums){
        total+=num;
    }
    return total;
}
console.log(sum(10,20,30,40));




function sum(name, ...args){
    console.log(args);

    let total = 0;

    for(let i of args){
        total = total + i;
    }

    console.log("Hello "+name);
    console.log("Total: "+total);
}

sum("Kakul", 10,20,30,40);




