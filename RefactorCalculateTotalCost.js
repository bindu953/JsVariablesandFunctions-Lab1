// Task 4: Refactoring for Reusability
// 1.	Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. 
// If the discount is provided, the function should subtract the discount from the total cost before applying tax.
// 2.	If no discount is provided, calculate the total cost as before.

// Import function from mathematicalOperators.js
const { isInputValid } = require("./MathematicalOperators");

function calculateTotalCost(price, quantity, taxRate, discount = 0) {

    // Check if all inputs are valid numbers
    if (!isInputValid(price) ||
        !isInputValid(quantity) ||
        !isInputValid(taxRate) ||
        !isInputValid(discount)) {
        return "Invalid input.";
    }

    // Calculate subtotal
    let subtotal = price * quantity;

    // Subtract discount before applying tax
    let discountedTotal = subtotal - discount;

    // Calculate total cost including tax
    let totalCost = discountedTotal * (1 + taxRate);

    return  `TotalCost of items , including tax : $ ${totalCost}`;
}

// Test without discount
console.log(calculateTotalCost(150, 4, 0.25));

// Test with discount
console.log(calculateTotalCost(150, 4, 0.25, 50));

// Test with invalid input
console.log(calculateTotalCost("abc", 4, 0.25, 50));

// Test without discount,discount =0
console.log(calculateTotalCost(100, 4, 0.50, 0));

//Tests with invalid inputs
console.log(calculateTotalCost("test", 4, 0.75,10))
console.log(calculateTotalCost("100","xyz", 0.15,20))
console.log(calculateTotalCost("100","4","taxrate",0))

