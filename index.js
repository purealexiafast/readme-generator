const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input  //license = a type: "list", choices: ["", "", ""]
const questions = [
    {
        type: "input", 
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input", 
        name: "description",
        message: "What is the description of your project?"
    },

    {
        type: "input",
        name: "tableofcontents",
        message: "Table of Contents is generated. Please press enter."

    },

    {
        type: "input",
        name: "installation",
        message: "Please enter installation information."
    },

    {
        type: "input",
        name: "usage",
        message: "Please enter usage information."
    },

    {
        type: "list", 
        choices: ["MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU LGPL v3", "none"],
        
        //Must be a list to choose from. Addds badge to the topt of ReadMe. Description is added under "description"
        name: "license",
        message: "What license are you using? A badge and description will be provided."
    },

    {
        type: "input",
        name: "contributing",
        message: "Please enter contributing information."
    },

    {
        type: "input",
        name: "tests",
        message: "Please enter all test information."
    },

    {
        type: "input",
        name: "questions",
        message: "Please enter all questions."
    },

    {
        type: "input",
        name: "githubusername",
        message: "What is your GitHub username."  // This must be added to the Questions section, with a link to the GitHub profile
    },

    {
        type: "input",
        name: "emailaddress",
        message: "What is your email address?" // This must be added to the questions section, with insturcitons on how to reach the user with additional questions
    }

];

/*
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README */

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname,fileName + ".md"),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    const markdownData = generateMarkdown(answers);
    console.log(markdownData);
    writeToFile("SampleReadMe", markdownData)

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();


