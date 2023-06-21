// TODO: Include packages needed for this application
const fs = require("fs")//to read and write files
const inquirer = require("inquirer")//the inquiry files from JSON
const generateMarkdown = require("./utils/generateMarkdown")//download markdown file

// TODO: Create an array of questions for user input
const questions = [
    "What is the name of your project repo?",
    "Please provide a short description explaining the what, why, and how of your project.",
    "What are the steps required to install your project?",
    "Please provide instructions and examples of the applications use.",
    "List your collaborators.",
    "Choose a liscense:",
    "Any badges? If none type n/a.",
    "Does you project have any features? If none type n/a.",
    "Provide guidelines for how other developers can contribute. If none type n/a.",
    "Enter test instructions:",
    "Enter your GitHub username:",
    "Enter your email address:"
];

//what will prompt the user for the information to generate README
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project repo?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples of the applications use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Choose a liscense:',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0'],
    },
    {
        type: 'input',
        message: 'Any badges? If none type n/a.',
        name: 'badges',
    },
    {
        type: 'input',
        message: 'Does you project have any features? If none type n/a.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Provide guidelines for how other developers can contribute. If none type n/a.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
  ])
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
// TODO: Create a function to write README file
    fs.writeFile("README.md", readmeContent, (err) => {
        if (err) throw err;
        console.log("You successfully created a REAADME!")
    });
})
.catch((error) => {
    console.error(error);
});