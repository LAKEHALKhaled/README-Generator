// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if(answers.license === "None"){
    return ''
  }
  else{
    return `[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})`
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  if(answers.license === "None"){
    return ''
  }
  else{
    return `* [Licence](#licence)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  if(answers.license === "None"){
    return ''
  }
  else{
    return `### License Covering
            This project is covered under ${answers.license}`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title} 
  ## Description 
  ${answers.description}
  
 ${renderLicenseBadge(answers)}
  
  ## Table of contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#test)
  * [Contribution](#contribution)
   ${renderLicenseLink(answers)}
  * [Contact](#contact)
  
  
  ## Installation Instructions
  ${answers.instal}
  
  ## Usage
  ${answers.usage}
  
  ## Tests 
  ${answers.instal}
  
  ## Contribution
  ${answers.usage}
  
  ${renderLicenseSection(answers)}
  
  ## Contact Information
  * ${answers.name}
  * ${answers.email}
  * ${answers.github}
  `
}

module.exports = generateMarkdown;
