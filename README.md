
# Lab 1: Variables and Functions

## Project Overview

This lab focuses on practicing JavaScript variables, functions, parameters, return values, and conditional statements. The goal was to create reusable functions that perform string manipulation, mathematical calculations, input validation, and eligibility checks.

I also practiced refactoring existing code, using optional parameters, and reusing functions across different JavaScript files.

## Technologies Used

- JavaScript
- Node.js
- Visual Studio Code
- Git and GitHub

## Tasks Completed

### Task 1: Flexible String Manipulation

Created a function called `formatFullName()` that:

- Accepts first name and last name as parameters.
- Capitalizes the first letter of each name.
- Returns the name in `LastName, FirstName` format.
- Returns `"Invalid name input."` if either name is missing.
- Uses a helper function to capitalize the names.

**Example:**

```javascript
console.log(formatFullName("hima", "danda"));
// Output: Danda, Hima
```

### Task 2: Mathematical Operations

Created a function called `calculateTotalCost()` that:

- Accepts price, quantity, and tax rate as parameters.
- Calculates the total cost including tax.
- Validates the inputs using a separate `isInputValid()` function.
- Returns `"Invalid input."` if any input is not a valid number.

**Formula:**

```javascript
totalCost = (price * quantity) * (1 + taxRate);
```

**Example:**

```javascript
console.log(calculateTotalCost(150, 4, 0.25));
// Output: TotalCost of items, including tax: $ 750
```

### Task 3: Functions with Conditional Logic

Created a function called `checkEligibility()` that checks whether a person is eligible for a program based on age and employment status.

The function checks the following conditions:

- Over 18 and employed: Eligible.
- Over 18 and unemployed: Conditionally eligible.
- 18 or younger: Not eligible.

This task helped me practice `if`, `else if`, `else`, and conditional logic.

### Task 4: Refactoring for Reusability

Refactored the calculator function from Task 2 by adding an optional `discount` parameter.

- Added `discount = 0` as a default parameter.
- Subtracted the discount before applying tax.
- Reused the `isInputValid()` function from `MathematicalOperators.js`.
- Used `module.exports` and `require()` to share the validation function between files.
- Used `require.main === module` to prevent test cases from running when importing the file.

**Formula:**

```javascript
totalCost = ((price * quantity) - discount) * (1 + taxRate);
```

**Example:**

```javascript
console.log(calculateTotalCost(150, 4, 0.25, 50));
// Output: TotalCost of items, including tax: $ 687.5
```

## How to Run the Project

1. Clone the GitHub repository.

```bash
git clone <repository-url>
```

2. Open the project folder in Visual Studio Code.

3. Make sure Node.js is installed.

4. Open the terminal and run the JavaScript files individually.

For example:

```bash
node MathematicalOperators.js
```

To run Task 4:

```bash
node refactorCalculator.js
```

5. Check the output in the terminal.

## Challenges Faced

During this lab, I faced a few challenges:

- Understanding the difference between `return` and `console.log()`.
- Validating numeric inputs using `typeof` and `Number.isFinite()`.
- Writing conditional statements correctly.
- Understanding how to use the ternary operator.
- Reusing a function from another JavaScript file using `module.exports` and `require()`.
- Preventing test cases from running automatically when importing another file.

I solved these issues by testing different inputs, reviewing error messages, and making changes to my code.

## What I Learned

Through this lab, I learned how to:

- Create functions with multiple parameters.
- Return values from functions.
- Manipulate strings using JavaScript methods.
- Validate function inputs.
- Use conditional statements to handle different scenarios.
- Use default parameters in functions.
- Refactor code to improve reusability.
- Import and export functions using CommonJS modules.
- Test JavaScript functions using Node.js.

## Reflection

My detailed reflections for this lab are available in the [reflections.md](./reflections.md) file.

## Conclusion

This lab helped me improve my understanding of JavaScript functions and conditional logic. I learned how to make functions more reusable and organize code across different files. It also gave me more practice debugging errors and testing different inputs to make sure my functions work correctly.
