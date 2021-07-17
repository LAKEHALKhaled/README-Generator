// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
    {
        type:'input',
        name: 'name',
        message: "Your name?"
    },
    {
        type:'input',
        name: 'github',
        message: "Github username?"
    },
    {
        type:'input',
        name: 'email',
        message: "Email address?"
    },
    {
        type:'input',
        name: 'title',
        message: "Project name?"
    },
    {
        type:'input',
        name: 'description',
        message: "Description of the project: "
    },
    {
        type:'list',
        name: 'license',
        message: "Licence to be used for the project:",
        choices: ["MIT","Apache", "BSD", "GPL","None"]
    },
    {
        type:'input',
        name: 'instal',
        message: "How to install the application:",
        
    },
    {
        type:'input',
        name: 'test',
        message: "Command to be run to tests?"
    },
    {
        type:'input',
        name: 'usage',
        message: 'What does the username need to know about using my repo?'
    },
    {
        type:'input',
        name: 'contribute',
        message: "How to contribute to the repo?"
    },
];



// TODO: Create a function to initialize app
const  init = () => {
    inquirer.prompt(questions).then( (answers) => {
      const READMEPage = generateMarkdown(answers)
      fs.writeFile("README.md", READMEPage, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    })
    
}

// Function call to initialize app
init();
