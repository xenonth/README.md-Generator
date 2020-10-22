# README-Generator            
![Alt text](https://github.com/xenonth/README.md-Generator/blob/master/badge-image/MIT.png?raw=true "License Badge")

    
### Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Instructions](#Instructions)
* [Usage](#Usage)
* [License](#License)
* [Tests](#TEST)
* [Questions](#Questions)
   
 ### Description
A program designed to generate a readme Markdown file by answering a set of questions inside a terminal using node.js Inquirer.  One major bug is during upload the readme file fails to load which means the last phase of testing to test links in the file cannot be checked.   AFter course classes it was a lot easier to understand and build the program with aide and advice from the TA and the course instructor.    

### Installation
* If you do not have node.js you must first install node.js
* Next run npm init, then npm install Inquirer,
* followed by npm install util, and npm install fs.

    ### Instructions
    Once the above programs have been installed the next step is to then type node generator-readme.js.  A series of questions are asked which require text or number input and then will write the file with the following information.  There is not minimum or maximum with the number of characters which you can use for this file.  

    ![Demonstration-Video](https://drive.google.com/file/d/1dRAyaEmOOeiutS7bDHvl3B5ENkak8Erk/view)
    
    ### Usage
    Intended for developers with node.js proficiency.

    ### Development Story
    I tried to be creative with Axios calls however, kept recieving many errors and with having simple understanding of promises, I decided to ask for the username instead and input that into the required part of the url link which still does the same thing however you are unable to upload or place it to a specific repository and will overwrite the readme file of the immediate repository that the readme file is already in.
    
    ##### Questions 
    For any issues please contact timothy.forbes259@gmail.com, and go here to view other projects [!github profile](https://github.com/xenonth)