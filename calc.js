import inquirer from "inquirer";
const userAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first number",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["addition (+)", "subtraction (-)", "multiplication(*)", "division(/)"],
        message: "Select your operator",
    },
]);
const { numberOne, numberTwo, operator } = userAnswer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "addition (+)") {
        result = numberOne + numberTwo;
    }
    else if (operator === "subtraction (-)") {
        result = numberOne - numberTwo;
    }
    else if (operator === "multiplication(*)") {
        result = numberOne * numberTwo;
    }
    else if (operator === "division(/)") {
        if (numberTwo === 0) {
            console.log("Number not divisible by 0");
        }
        else {
            result = numberOne / numberTwo;
        }
    }
    else {
        console.log("Please enter a valid input");
    }
    console.log("Result:", result);
}
else {
    console.log("Invalid input");
}
