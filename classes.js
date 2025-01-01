class customer {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    get info() {
        return this.name;
    }

    printDetails()  {
        console.log(`Name and email of customer is ${this.name} and ${this.email}`);
    }
}

const customer1 = new customer("John", "john@gmail.com");
const customer2 = new customer("Alice",  "alice@gmaiil.com");
console.log(customer1);

customer1.printDetails();
customer2.printDetails();

console.log(customer1.info);