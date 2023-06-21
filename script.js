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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();