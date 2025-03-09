class Person {
    constructor(name, age) {
        this.name = name;  // Property
        this.age = age;
    }

    greet() {  // Method
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("Alice", 30);
console.log(person1.greet());

const person2 = new Person("Bob", 25);
console.log(person2.greet());


// OUTPUT:
// --------
// Hello, my name is Alice and I am 30 years old.
// Hello, my name is Bob and I am 25 years old.




// Public & Private access modifiers

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;   // Public property
        this.#balance = balance; // Private property
    }

    deposit(amount) {
        this.#balance += amount;
        return `Deposit successful. New balance: $${this.#balance}`;
    }

    getBalance() {
        return `Current balance for ${this.owner}: $${this.#balance}`;
    }
}

const account = new BankAccount("John", 1000);
console.log(account.getBalance()); // Allowed

console.log(account.deposit(500)); // Allowed

console.log(account.#balance); // Error: Private property


// Output:
// --------
// Current balance for John: $1000
// Deposit successful. New balance: $1500
// Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class



// Getters & Setters

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.#salary = salary; // Private property
    }

    get salary() {
        return `$${this.#salary}`;
    }

    set salary(newSalary) {
        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            console.log("Invalid salary amount.");
        }
    }
}

const emp = new Employee("Alice", 5000);
console.log(emp.salary); // Uses getter

emp.salary = 6000; // Uses setter
console.log(emp.salary);

emp.salary = -2000; // Invalid amount


// Output:
// --------
// $5000
// $6000
// Invalid salary amount.




// Constructor

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayCarInfo() {
        return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
    }
}

const car1 = new Car("Toyota", "Corolla", 2022);
console.log(car1.displayCarInfo());

const car2 = new Car("Honda", "Civic", 2021);
console.log(car2.displayCarInfo());


// Output:
// --------
// Car: Toyota Corolla, Year: 2022
// Car: Honda Civic, Year: 2021



// Default Parameters

function greet(name = "Stranger", age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Emma", 22)); // Custom values
console.log(greet("Mike"));     // Uses default age
console.log(greet());           // Uses both default values


// Output:
// --------
// Hello, Emma! You are 22 years old.
// Hello, Mike! You are 18 years old.
// Hello, Stranger! You are 18 years old.
