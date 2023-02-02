// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue)` //encode turns it into a url encoded version // %20 is the url version of a space

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (license === "MIT License"){
    link = "https://choosealicense.com/licenses/mit/";
  } else if (license === "Apache License 2.0"){
    link = "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === "Mozilla Public License 2.0"){
    link = "https://choosealicense.com/licenses/mpl-2.0/";
  } else if (license === "GNU LGPL v3") {
    link = "https://choosealicense.com/licenses/lgpl-3.0/";
  } else {
    return "";
  }
  return `[${renderLicenseBadge(license)}](${link})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

## Description 
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under ${data.license}.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
</br>
Please direct all inquires to: <a href="mailto:${data.emailaddress}">${data.emailaddress}</a></br>
Please see my GitHub profile here: <a href="https://github.com/${data.githubusername}">${data.githubusername}</a>  
`;
}

module.exports = generateMarkdown;
