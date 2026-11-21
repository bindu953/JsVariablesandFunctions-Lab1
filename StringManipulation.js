//Task 1: Flexible String Manipulation with Functions
//Create a function called formatFullName that takes two parameters: firstName and lastName. 
// The function should return the full name in the format lastName, firstName.
//Format the firstName and lastName so that the first letter of each is always capatilized.
//Add a condition that checks if either the first or last name is missing. 
// If so, return a string saying “Invalid name input.”

//Function to format the Full Name
function formatFullName(firstName, lastName) {

    // checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”
    if (!firstName || !lastName) {
        //console.log("Invalid name input.")
        return "Invalid name input.";
    }

    //assign value to fullName varibale in the format lastName, firstName.
    let fullName = `Printing Full Name in the format lastName, firstName : ${capitalizeFirstLetter(lastName)}, ${capitalizeFirstLetter(firstName)}.`
    //console.log(fullName)
    return fullName
    
}

//Function to change the case of the firstName and lastName so that the first letter 
//of firstName and lastName are always capatilized and letters other than first letter are in lower case 
function capitalizeFirstLetter(str) {

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

}

//Invoke or call formatFullName function with different inputs (Testing a Function)
console.log(formatFullName("hima", "danda"));
console.log(formatFullName("hIMA", "daNdA"));
console.log(formatFullName("john", "smith"));
console.log(formatFullName("", "smith"));
console.log(formatFullName("hima", ""));
console.log(formatFullName("", ""));