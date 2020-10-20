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

// function to select license option

// function to write and append github link

    //github.then link may be needed
    /*.then(function({ username }) {
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
} */

// function to initialize program
const init = async () => {
   console.log("hi")
        try {
          const answers = await questionSetPrompt();
      
          //const README = generateReadMe(answers);
      
          //await writeFileAsync("index.html", README);
      
          //console.log("Successfully wrote to index.html");
        } catch(err) {
          console.log(err);
        }
    }

// function call to initialize program
init();

/*.then(function({ contributerNumber }) {
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
}) */
