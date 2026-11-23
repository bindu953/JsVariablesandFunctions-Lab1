
# Lab 1: Variables and Functions

## Reflection Questions

### 1. How did you approach creating more flexible functions with parameters?

I started by understanding the requirements of each task and identifying the parameters needed for the functions. I used parameters instead of hardcoded values so the functions could handle different inputs. For example, in `calculateTotalCost()`, I used price, quantity, and tax rate as parameters. I also created a separate `isInputValid()` function to validate numbers and reused it in different functions. This helped me understand how to make functions more flexible and reusable.

### 2. What challenges did you face while incorporating conditional logic in your functions?

One challenge I faced was validating inputs correctly using `typeof` and `Number.isFinite()`. Initially, I was confused about how to check whether an input was a valid number. I also learned the difference between `return` and `console.log()` while working on the `formatFullName()` function. Another challenge was understanding how to use `if`, `else if`, and `else` conditions and where to use a ternary operator. Testing different inputs helped me identify errors and improve my understanding of conditional logic.

### 3. How does refactoring improve the readability and maintainability of your code?

Refactoring helped me improve my existing code without changing its main functionality. In Task 4, I added an optional discount parameter to the calculator function. I also reused the `isInputValid()` function from `MathematicalOperators.js` using `module.exports` and `require()`. One challenge I faced was that importing the file also executed its `console.log()` statements. I resolved this by using `require.main === module` to run test cases only when the file is executed directly. This helped me understand how to organize code into separate files, avoid repeating code, and make it easier to maintain.
