// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown.js');

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
//THEN this information is added to the sections of the README entitled 
//Description, Installation, Usage, Contributing, and Tests

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
        message: 'Please list any required packages to instal your application. (Required)',
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
        message: 'Please include the guidelines for contributing. (Required)',
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
        message: 'Please include any test information for your application. (Required)',
        validate: testsValue => {
            if (testsValue) {
                return true;
            } else {
                console.log('Please include any test information required to run tests for your application!');
                return false;
            }
        }
    },
// License  
        //a badge for that license is added near the top of the README and a notice is added to the section of the README
        // entitled License that explains which license the application is covered under)
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please indicate the applicable license (Required)',
            choices: ['MIT', 'ISC','GNU', 'Apache 2.0',],
            default: 0,
            validate: licenseChoice => {
                if (licenseChoice) {
                    return true;
                } else {
                    console.log('Please provide license information!');
                    return false;
                }
            }
        }, 
// Questions
    // GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub profile link. (Required)',
        validate: githubUN => {
            if (githubUN) {
                return true;
            } else {
                console.log('Please enter your GitHub profile link!');
                return false;
            }
        }
    },

    // Email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your contact email. (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your GitHub profile link!');
                return false;
            }
        }
    },
];

// template
//console.log(`
//         //     ==============
//         //     Add New Credit
//         //     ==============
//         //     `);
       
            
        


    
            

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(`./results/${fileName}`, data, err => {
    //     if (err) {
    //         throw err
    //     };
    //     console.log('README created!')
    // });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(answers => generateMarkdown(answers))
    // .then(generatedReadMe => writeToFile('README.md', generatedReadMe))
    // .catch(err => {
    //     console.log(err);
    // });
