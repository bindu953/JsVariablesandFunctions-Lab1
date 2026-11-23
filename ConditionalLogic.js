// Task 3: Functions with Conditional Logic
// 1.	Write a function called checkEligibility that takes two parameters: age and isEmployed. 
//      The function should check if a person is eligible for a program based on the following rules:
// •	If the person is over 18 and employed, they are eligible.
// •	If the person is over 18 but unemployed, they are conditionally eligible.
// •	If the person is 18 or younger, they are not eligible.
// 2.	Return an appropriate string message for each scenario.

//Function checkEligibility to check eligibility for a program based on the rules
function checkEligibility(age, isEmployed) {

    //If the person is over 18 and employed, they are eligible.
    if (age > 18 && isEmployed) {

        return "You are eligible for the program."
    }

    // If the person is over 18 but unemployed, they are conditionally eligible.
    else if (age > 18 && !isEmployed) {

        return "You are conditionally eligible for the program."
    }

    //If the person is 18 or younger, they are not eligible.
    else {

        return "You are not eligible for the program."

    }

}

//Invoke / call the function calculateTotalCost
console.log(checkEligibility(21, true));
console.log(checkEligibility(20, false));
console.log(checkEligibility(18, true));
console.log(checkEligibility(16, true));

//Check Eligibility using the ternary operator
// function refactorCheckEligibility(age, isEmployed) {

//     if (age <= 18) {

//         return "You are not eligible for the program.";
//     }

//     return isEmployed
//         ? "You are eligible for the program."
//         : "You are conditionally eligible for the program.";
// }

//Invoke / call the function calculateTotalCost
// console.log(refactorCheckEligibility(21, true));
// console.log(refactorCheckEligibility(20, false));
// console.log(refactorCheckEligibility(18, true));
// console.log(refactorCheckEligibility(16, true));