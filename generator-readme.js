// have a seperate function for each question which is cleanly listed inside writefile plant await x function inside with file creation inside the seperate functions. 

const axios= require("axios");
const fs = require('fs');
const inquirer = require('inquirer');
const { cpuUsage } = require("process");


// Ideas Array for questions
// following sections need to each have a question description, installation instructions, usage information, contribution guidelines, and test instructions
const questions= 
["Title of your application?", 
"Description of your application?",
"How does the user install your application?",
"Instructions to use the program?",
"Usage Information of the Program?",
"Which License do you wish your program to be under?",
"Are there any other Contributors to this project?",
"Test Instructions for user's to Troubleshoot?",
];
// async function to catalogue data then pass it into writeToFile

// function to write README file

async function writeToFile(fileName, data) {

}
// async await functions for each question type
const titleQuestion = async () => {
    inquirer.prompt([{
            name: "title",
            message: questions[0],
            type: "input",
    }])
    .then(function({ title }) {
        console.log(title);
        return title
    })
}
// function to ask the description section
const descriptionQuestion = async () => {
    inquirer.prompt([{
            name: "description",
            message: questions[1],
            type: "input",
    }])
    .then(function({ description }) {
        console.log(description);
        return description
    })
}

const installQuestion = async () => {
    inquirer.prompt([{
            name: "install",
            message: questions[2],
            type: "input",
    }])
    .then(function({ install }) {
        console.log(install);
        return install
    })
}

const instructionQuestion = async () => {
    inquirer.prompt([{
            name: "instruction",
            message: questions[3],
            type: "input",
    }])
    .then(function({ instruction }) {
        console.log(instruction);
        return instruction
    })
}

const usageQuestion = async () => {
    inquirer.prompt([{
            name: "usage",
            message: questions[4],
            type: "input",
    }])
    .then(function({ usage}) {
        console.log(usage);
        return cpuUsage
    })
}
const contributorsQuestion = async () => {
    inquirer.prompt([{
            name: "contributorNumber",
            message: questions[6],
            type: "number",
    }])
    .then(function({ contributerNumber }) {
        console.log(contributorNumber);
        //If there 
        if ((contributerNumber !== 0) && (contributerNumber < 4))  {
            for (let i=0; i < contributerNumber; i++) {
                inquirer.prompt([{
                    name: "username",
                    message: `What is Contributor No. ${i}'s User Name?`,
                    type: "input"}])
    
                .then(function({ username }) {
                    const queryUrl = `https://api.github.com/users/${username}`;
                    axios({
                        method: 'get',
                        url: queryUrl,
                    })
                    .then(function (response) {
                        console.log(response.data.html_url)
                        let githubLink = response.data.html_url;
                        console.log(githubLink)
                    })
                })
            } // else statement for more than 4 contributors to ask if it is a company project and link company name here.
        }
    })
}

const userTestingQuestion = async () => {
    inquirer.prompt([{
            name: "test",
            message: questions[-1],
            type: "input",
    }])
    .then(function({ test }) {
        console.log(test);
        return test
    })
}


// function to select license option
const licenseSelector = async () => {
    inquirer.prompt([{
        
        name: "license",
        message: questions[5],
        type: "list",
        choices: ["MIT", "AGPL ", "GPLv3", "Apache License 2.0"],
    }])
    .then(function({license}) {
        console.log(license);
        return license
    })
}
// function to write and append github link
const githubInfo = async () => {
    inquirer.prompt([{
        name: "username",
        message: "What is your Github User Name?",
        type: "input"}])

    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios({
          method: 'get',
          url: queryUrl,
        })
    .then(function (response) {
            console.log(response.data.html_url)
            const githubLink = response.data.html_url;
            return githubLink;
        })
    });
}

// function to initialize program
const init = async () => {
    await titleQuestion();
    await descriptionQuestion();
    await installQuestion ();
    await instructionQuestion ();
    await usageQuestion ();
    await licenseSelector ();
    await contributorsQuestion ();
    await userTestingQuestion ();
    await githubInfo ();
    

}

// function call to initialize program
init();
