#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.94,
    POND: 0.80,
    GBP: 0.76,
    SR: 3.75,
    INR: 83.66,
    LIRA: 32.48,
    PKR: 278,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "SR", "INR", "LIRA", "PKR",]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "SR", "INR", "LIRA", "PKR",]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
        choices: ["USD", "EUR", "GBP", "SR", "INR", "LIRA", "PKR",]
    }
]);
let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
