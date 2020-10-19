// have a seperate function for each question which is cleanly listed inside writefile plant await x function inside with file creation inside the seperate functions. 

const axios= require("axios");
const fs = require('fs');
const inquirer = require('inquirer');


// Ideas Array for questions
// following sections need to each have a question description, installation instructions, usage information, contribution guidelines, and test instructions
const questions= 
["Title of your application?", 
"Description of your application?",
"How does the user install your application?",
"Instructions to use the program?",
"Usage Information of the Program?",
"Which License do you wish your program to be under?",
"Who are the other Contributors to this project?",
"Test Instructions for user's to Troubleshoot?",
];
// async function to catalogue data then pass it into writeToFile
const data = async () => {
    inquirer.prompt ([{
        name: "title",
        message: questions[0],
        type: "input"
    },
    {
        name: "description",
        message: questions[1],
        type: "input",
    },
    {
        name: "install",
        message: questions[2],
        type: "input",
    },
    {
        name: "instructions",
        message: questions[3],
        type: "input",
    },
    {
        name: "Usage",
        message: questions[4],
        type: "input",
    },
    {
        name: "license",
        message: questions[5],
        type: "list",
    },
    {
        name: "contributors",
        message: questions[6],
        type: "input",
    },
    {
        name: "test",
        message: questions[7],
        type: "input",
    }])
    .then(data => {
        console.log(data)
    })
}

// function to write README file

async function writeToFile(fileName, data) {

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
async function init() {


}

// function call to initialize program
init();
