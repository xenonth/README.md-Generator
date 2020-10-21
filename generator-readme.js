// have a seperate function for each question which is cleanly listed inside writefile plant await x function inside with file creation inside the seperate functions. 

const axios= require("axios");
const fs = require('fs');
const inquirer = require('inquirer');
const { cpuUsage } = require("process");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


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
// function to catalogue data then pass it into writeToFile

const questionSetPrompt = () => {
    return inquirer.prompt([
        {
            name: "title",
            message: questions[0],
            type: "input",
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
        name: "instruction",
        message: questions[3],
        type: "input",
    },
    {
        name: "usage",
        message: questions[4],
        type: "input",
    },
    {
        name: "contributorNumber",
        message: questions[6],
        type: "number",
    },
    {
        name: "license",
        message: questions[5],
        type: "list",
        choices: ["MIT", "AGPL ", "GPLv3", "Apache License 2.0"],
    },
    {
        name: "contributorNumber",
        message: questions[6],
        type: "number",
    },
    {
        name: "test",
        message: questions[-1],
        type: "input",
    },
])
}

// function to generate README
function generateReadMeData (answers, githubLink) {
    return `
    #${answers.title}
    ------------------------------------------------
    ### Description
    ${answers.description}
    ------------------------------------------------
    ### How to Install
    ${answers.install}
    ------------------------------------------------
    ### Instructions
    ${answers.instruction}
    ------------------------------------------------
    ### Usage
    ${answers.usage}
    ------------------------------------------------
    ### Other Contributors
    ${answers.contributorNumber}
    ------------------------------------------------
    ### TEST
    ${answers.test}
    ------------------------------------------------

    `
    //##### Questions 
    //Please send any queries to ${githubLink}
}

// function to write and append github link




// function to initialize program

const init = async () => {
   console.log("hi")
        try {
          const answers = await questionSetPrompt();
          //const githubSite = await githubLink ();          

          const readme = generateReadMeData (answers);

          await writeFileAsync("README.md", readme);

          console.log("Successfully wrote to readme.md");
        } catch(err) {
          console.log(err);
        }
    }

// function call to initialize program
init();


