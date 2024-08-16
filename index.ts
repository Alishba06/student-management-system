#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber: number = Math.floor(10000 + Math.random  () * 90000)

let myBalance = 0

let anwer = await inquirer.prompt(
    [
        {
            name: "student",
            type: "input",
            message: "Enter your student Name:",
            validate:function(valu){
                if(valu.trim !== ""){
                    return true;
                }
                return "please enter a non-empty value .";
            },


        },
        {
            name: "couses",
            type: "list",
            message: "Select your course:",
           choices: ["Python" , "JavaScript" , "C++" ,"Java" , "HTML" , "CSS" , "Typescript"]

        }
    ]
);

const TutionFees: {[key: string] : number} = {
      
    "Python": 1000,
    "JavaScript": 2000,
    "C++": 3000,
    "Java": 4000,
    "HTML": 5000,
    "CSS": 6000,
    "Typescript": 7000

};

console.log(`\nTution Fees: ${TutionFees[anwer.couses]} /-\n`)

console.log(`Balance ${myBalance}\n`);


let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["Bank Transfer" , "Easypaisa" , "Jazzcash"]

    },
    {
        name: "amount",
        type: "input",
        message: "Enter payment amount",
        validate:function(valu){
            if(valu.trim !== ""){
                return true;
            }
            return "Please enter a non-empty value."
        }
    }
])

console.log(`\nSelect payment method ${paymentType.payment}\n`)


const tutionFee = TutionFees[anwer.couses]
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFee === paymentAmount){
    console.log(`\nyour payment successfully enrolled in ${anwer.couses}.\n`);

    let ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: "what would you like to do next",
            choices: ["View Status" , "Exit"]
        }
    ])
    
    if(ans.select = "View Status"){
        console.log(`Balance : ${myBalance += paymentAmount}`);
        console.log("********Status********");
        console.log(`student Name: ${anwer.student}`);
        console.log(`student ID: ${randomNumber}`);
        console.log(`couses: ${anwer.couses}`);
        console.log(`tustion Fee paid : ${paymentAmount}`);
    
    }else{
        console.log("\nExiting studnt managment system:\n");
        
    }

    

}else{
    console.log("Invalid amount\n")
}

