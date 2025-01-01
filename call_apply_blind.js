
const user = {

    firstName: "Anshika",
    lastName: "Agarwal"
}
   let printFullName = function(color, hobby) {
        console.log(`My name is ${this.firstName} ${this.lastName} and My favourate color is ${color} and My hobby is ${hobby}`);
    }
 

// printFullName.call(user, "orange");   // call
printFullName.apply(user, ["yellow", "Travelling"]);  //apply

const user2 = { 
    firstName: "Mark",
    lastName: "Zuckerbrg"
}

// printFullName.call(user2, "blue");
   printFullName.apply(user, ["blue", "cooking"]);  

   const printName = printFullName.bind(user, "orange", "Drawing");
   console.log(printName);
   printName();