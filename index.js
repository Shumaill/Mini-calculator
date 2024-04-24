#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter 1st Number", type: "number", name: "firstnumber" },
    { message: "Enter 2nd Number", type: "number", name: "secondnumber" },
    { message: "Select one of the Operators to perform action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
// conditional statement
if (answer.operators === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please select a valid operator");
}
