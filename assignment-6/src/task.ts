
class Employee {
    constructor(public name: string, public id: number, protected salary: number) {}
    
    calculateBonus(): void {
        
    }
}

class Manager extends Employee {
    calculateBonus(): string {
        return `Bonus of ${this.name} is ${this.salary* 0.2} `;
    }
}

class Engineer extends Employee {
    calculateBonus(): string {
        return `Bonus of ${this.name} is ${this.salary* 0.15} `;
    }
}

class Intern extends Employee {
    calculateBonus(): string {
        return `Bonus of ${this.name} is ${this.salary* 0.15} `;
    }
}

const manager = new Manager("dk", 101, 100000);
console.log(manager.calculateBonus());

const intern = new Intern("abcd", 102, 30000);
console.log(intern.calculateBonus());

//Vehicle Management
class Vehicle {
    constructor(public brand: string, public model: string, protected rentPricePerDay: number) {}
    
    calculateRentalCost(days: number): number {
        return this.rentPricePerDay * days;
    }
}

class Car extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.calculateRentalCost(days) * 1.1; 
    }
}

class Bike extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.calculateRentalCost(days) * 0.9; 
    }
}

class Truck extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.calculateRentalCost(days) * 1.5; 
    }
}
//testing
const car = new Car("Rolls-Royce", "Phantom", 50);
console.log(car.calculateRentalCost(5)); 

const bike = new Bike("Yamaha", "R15", 20);
console.log(bike.calculateRentalCost(3)); 


//Payment
abstract class Payment {
    constructor(public amount: number, public date: string) {}
    abstract processPayment(): string;
}

class CreditCardPayment extends Payment {
    private cardNumber: string;
    constructor(amount: number, date: string, cardNumber: string) {
        super(amount, date);
        this.cardNumber = cardNumber;
    }
    processPayment(): string {
        return `Paid $${this.amount} by Credit Card on ${this.date}.`;
    }
}

class PayPalPayment extends Payment {
    constructor(amount: number, date: string, private email: string) {
        super(amount, date);
    }
    processPayment(): string {
        return `Paid $${this.amount} by PayPal on ${this.date}.`;
    }
}

class CryptoPayment extends Payment {
    constructor(amount: number, date: string, private walletAddress: string) {
        super(amount, date);
    }
    processPayment(): string {
        return `Paid $${this.amount} by Crypto on ${this.date}.`;
    }
}

//testing
const creditPayment = new CreditCardPayment(500, "2025-02-12", "1234-5678-1234-5678");
console.log(creditPayment.processPayment());

const paypalPayment = new PayPalPayment(250, "2025-02-12", "dk@gmail.com");
console.log(paypalPayment.processPayment());
