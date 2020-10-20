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
// function to catalogue data then pass it into writeToFile

const questionSetPrompt = () => {
    inquirer.prompt([
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
    {
        name: "username",
        message: "What is your Github User Name?",
        type: "input",
    }
])
}

// function to write README file

 function writeToFile(fileName, data) {
     
    fs.writeFile(fileName, data, (error) => {
          // throws an error, you could also catch it here
      if (error) throw error;
  
      // success case, the file was saved
      console.log('Success! Readme Written');

    });
    

}
// function to generate README
function githubLink (answers) {
    const queryUrl = `https://api.github.com/users/${answers.username}`;
    axios({
      method: 'get',
      url: queryUrl,
    })
    .then(function (response) {
        console.log(response.data.html_url)
        const githubLink = response.data.html_url;
        return githubLink;
    })
}

function generateReadMeData (answers) {
    githubLink (answers);
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
    ##### Questions 
    Please send any queries to ${githubLink ()}
    `
}

// function to write and append github link

    //github.then link may be needed

 

// function to initialize program
const init = async () => {
   console.log("hi")
        try {
          const answers = await questionSetPrompt();
          writeToFile("README.md", generateReadMeData(answers));

          console.log("Successfully wrote to index.html");
        } catch(err) {
          console.log(err);
        }
    }

// function call to initialize program
init();
