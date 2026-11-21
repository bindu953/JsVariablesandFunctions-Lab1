// Task 2: Mathematical Operations with Multiple Parameters
// Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
// The function should calculate the total cost of items, including tax. Use the formula: 
// totalCost = (price * quantity) * (1 + taxRate).
// Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”

//Function to caluculate the total cost using the formula : totalCost = (price * quantity) * (1 + taxRate).
function calculateTotalCost(price, quantity, taxRate) {

    if(!isInputValid(price)||(!isInputValid(quantity))||(!isInputValid(taxRate))){
        //console.log("Invalid input.")
        return "Invalid input."
    }

    //Calculate total cost and assign to totalCost variable
    let totalCost = (price * quantity) * (1 + taxRate)
    //console.log(`TotalCost of items , including tax : $ ${totalCost} `)
    return totalCost
}

//Function to check if the inputNumber is valid 
function isInputValid(inputNumber) {

    if (typeof inputNumber !== "number" || !Number.isFinite(inputNumber)) {
        return false;
    }

    return true;
}

console.log(`TotalCost of items , including tax : $ ${calculateTotalCost(150, 4, 0.25)}`)
console.log(`TotalCost of items , including tax : $ ${calculateTotalCost("test", 4, 0.75)}`)
console.log(`TotalCost of items , including tax : $ ${calculateTotalCost("100","xyz", 0.15)} `)
console.log(`TotalCost of items , including tax : $ ${calculateTotalCost("100","4","taxrate")} `)
console.log(`TotalCost of items , including tax : $ ${calculateTotalCost(100, 6, 0.85)} `)
