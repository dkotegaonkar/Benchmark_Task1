class Employee {
    #salary;
    constructor(name,id,salary){
        this.name = name;
        this.id = id
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    calculateBonus() {
        return 0;
    }
};

class Manager extends Employee {
    calculateBonus(){
        return this.getSalary() * 0.2;
    }
}

class Engineer extends Employee {
    calculateBonus(){
        return this.getSalary() * 0.15;
    }
}

class Intern extends Employee{
    calculateBonus(){
        return this.getSalary() * 0.05;
    }

}



class Vehicle{
    constructor(brand,model,rentPricePerDay){
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }

    calculateRentalCost(days) {
        return this.rentPricePerDay * days;
    }
 
}

class Car extends Vehicle{
    calculateRentalCost(days) {
        let discount = days > 7 ? 0.1 : 0;  
        return (this.rentPricePerDay * days) * (1 - discount);
    }
}

class Bike extends Vehicle{
    calculateRentalCost(days) {
        let discount = days > 5 ? 0.05 : 0; 
        return (this.rentPricePerDay * days) * (1 - discount);
    }
}

class Truck extends Vehicle{
    calculateRentalCost(days) {
        let discount = days > 3 ? 0.07 : 0; 
        return (this.rentPricePerDay * days)*(1-discount);
    }
}

class Payment {
    #cardNumber;
    constructor(amount, date, cardNumber) {
        this.amount = amount;
        this.date = date;
        this.#cardNumber = cardNumber;
    }
    
    processPayment() {
        return `Processing payment of $${this.amount} on ${this.date}`;
    }
}

class CreditCardPayment extends Payment {
    constructor(amount, date, cardNumber) {
        super(amount, date, cardNumber);
    }
    
    processPayment() {
        return `Credit Card Payment of $${this.amount} processed on ${this.date}.`;
    }
}

class PayPalPayment extends Payment {
    constructor(amount, date, email) {
        super(amount, date);
        this.email = email;
    }
    
    processPayment() {
        return `PayPal Payment of $${this.amount} processed on ${this.date} via ${this.email}.`;
    }
}

class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }
    
    processPayment() {
        return `Crypto Payment of $${this.amount} processed on ${this.date} to wallet ${this.walletAddress}.`;
    }
}