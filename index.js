// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generatedPage = require('./src/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
//Title
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a project title.(Required)',
        validate: nameValue => {
            if (nameValue) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
// First Sections 
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your application. (Required)',
        validate: desValue => {
            if (desValue) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please list any required packages to instal your application.',
        validate: installValue => {
            if (installValue) {
                return true;
            } else {
                console.log('Please list the installation instructions!');
                return false;
            }
        }
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the details to use your application. (Required)',
        validate: usageValue => {
            if (usageValue) {
                return true;
            } else {
                console.log('Please provide the details to use your application!');
                return false;
            }
        }
    },
    // Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Please include the guidelines for contributing.',
        validate: contributingValue => {
            if (contributingValue) {
                return true;
            } else {
                console.log('Please include the guidelines for contributing!');
                return false;
            }
        }
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please include any test information for your application.',
        validate: testsValue => {
            if (testsValue) {
                return true;
            } else {
                console.log('Please include any test information required to run tests for your application!');
                return false;
            }
        }
    },
];    


// License  
        //a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under)
    // Questions
        // GitHub username
            // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        // Email address
            // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

















    
            

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init();
