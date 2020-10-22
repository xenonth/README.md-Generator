// have a seperate function for each question which is cleanly listed inside writefile plant await x function inside with file creation inside the seperate functions. 

const axios= require("axios");
const { Console } = require("console");
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
"Names of other contributors for this Project, (if not type N/A)?",
"What is your email address for user's to contact?",
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
        choices: ["MIT", "AGPL ", "BSD3", "Apache License 2.0"],
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
    {
        name: "email",
        message: questions[7],
        type: "input" 
    },
    {
    name: "username",
    message: "What is your Github User Name?",
    type: "input",
    }
])
}

// function to generate README
function generateReadMeData (answers) {
    return `
    #${answers.title}               [!Alt Text](https://github.com/xenonth/README.md-Generator/tree/main/badge-image/${answers.license}.png)
    ------------------------------------------------
    ### Table of Contents

    * [Description] (#Description)
    * [Installation] (#Installation)
    * [Usage] (#Usage)
    * [License] (#License)
    * [Contributing] (#Contributing)
    * [Tests] (#TEST)
    * [Questions] (#Questions)
    -----------------------------------------------
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
    ##### Questions 
    For any issues please contact ${answers.email}, and go here to view other projects [!github profile](https://github.com/${answers.username})
    `
    //
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
            console.log("Updating README.md ...")
          await writeFileAsync("README.md", readme);

          console.log("Successfully wrote to readme.md");
        } catch(err) {
          console.log("An error was encountered please run program again");
        }
    }

// function call to initialize program
init();


