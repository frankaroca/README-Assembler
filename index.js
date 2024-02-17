// TODO: Include packages needed for this application
const fs = require("fs");

// need inquirer variable here
const inquirer = require("inquirer");

// need a markdown js file here
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    
    // Project title
    {
        type: "input",
        name: "title",
        message: "Project title: ",
    },

    // Project description
    {
        type: "input",
        name: "description",
        message: "Project description: ",
    },

    // Installation
    {
        type: "input",
        name: "installation",
        message: "How to install: ",
    },

    // How to use
    {
        type: "input",
        name: "usage",
        message: "How to use application: ",
    },

    // Select license
    {
        type: "list",
        name: "license",
        message: "Select a license for the project: ",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
    },

    // Contribution
    {
        type: "input",
        name: "contributing",
        message: "How to contribute to project: ",
    },

    // How to test
    {
        type: "input",
        name: "tests",
        message: "How to test the project: ",
    },

    // Github Username
    {
        type: "input",
        name: "userName",
        message: "Github Username: ",
    },

    // Email
    {
        type: "input",
        name: "userEmail",
        message: "Email: ",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Writes data to file by utilizing generateMarkdown variable which links to generateMarkdown.js file
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    // Receive 'questions' array and creates data for it
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        // Utilizes writeToFile function to send data off to Assets folder
        writeToFile("./Assets/README.md", data);
    });
}


// Function call to initialize app
init();
