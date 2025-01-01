const user = {
    names: ["john", "Bob"],
    age: 23,

    printDetails: function() {
        console.log("details of user");

    },
    greet: function(){
        console.log("Greeting");
    }
};

// console.log(user.names);
// console.log(user.age);
// user.greet();
// user.printDetails();

//object inside an object

const users = {

    names: {
        first:"john",
        last: "Martin"
    },
}
// console.log(users.names.first);
// console.log(users.names.last);

//bracket notation

// console.log(user["age"]);

function logProperty(propertyName) {

    console.log(user[propertyName]);    // here works bracket only

}

logProperty("age");

user["names"]["first"] = "Alice";
user.names.first = "alice_new";

console.log(user.names.first);

user.age = 15;
console.log(user.age);

user.hobbies = ["listening music", "cooking"];

console.log(user.hobbies);
console.log(user);

user.farewell = function() {
    console.log("GoodBye!!");
}

console.log(user);

user.farewell();