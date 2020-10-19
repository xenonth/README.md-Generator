const fs = require('fs');
const inquirer = require('inquirer');

// const questions = {
//         name: "q1",
//         message: "what is your name?",
//         type: "input"
//     }

["what is your name?", 
"where do you live?",
"bio?",
"github username?"];

inquirer.prompt([{
        name: "q1",
        message: "what is your name?",
        type: "input"}])
    .then(answers => {
            console.log('Answers:', answers);
            fs.writeFile('/')
        const name = answers})
.catch(function(err){
    console.log("there was an error"+ err);
});