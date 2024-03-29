#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random()*10);
console.log("wecom to number guessing game")

const answers = await inquirer.prompt([
   {name: "enterYourNumber",
   type:"string",
   message:"Enter your name"

   },
    {
    name:"userGuessedNumber",
    type:"number",
    message:"please guess a number",
}]);
if(answers.userGuessedNumber === randomNumber)
{console.log("congratulations! you guess right number")}

else {console.log("sorry!you guess wrong number")}



console.log(answers) 