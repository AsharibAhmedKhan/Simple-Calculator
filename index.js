#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: 'Enter first number', type: 'number', name: 'firstNumber' },
    { message: 'Enter second number', type: 'number', name: 'secondNumber' },
    { message: 'Select one of the operators', type: 'list', name: 'operator', choices: ['Add', 'Subtract', 'Multiply', 'Divide'] }
]);
if (answer.operator === 'Add') {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === 'Subtract') {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === 'Multiply') {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === 'Divide') {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log('Select valid operator');
}
