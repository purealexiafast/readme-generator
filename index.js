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

    }
];

//my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

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
    writeToFile("readmeGenerated", markdownData)

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
