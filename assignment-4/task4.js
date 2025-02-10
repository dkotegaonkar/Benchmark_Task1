const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "TV", price: 1000, category: "Electronics" },
    { name: "Shoes", price: 100, category: "Fashion" },
    { name: "T-shirt", price: 50, category: "Fashion" },
    { name: "Washing Machine", price: 600, category: "Home Appliances" }
];

const productNamesUpperCase = products.map(product => product.name.toUpperCase());
console.log( productNamesUpperCase);

const electronicsProducts = products.filter(product => product.category === "Electronics");
console.log(electronicsProducts);


const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);


const getTotalPriceByCategory = (category) => {
    return products
        .filter(product => product.category === category)  
        .map(product => product.price)                    
        .reduce((sum, price) => sum + price, 0);  
};


console.log(getTotalPriceByCategory("Electronics"));
console.log(getTotalPriceByCategory("Fashion"));
