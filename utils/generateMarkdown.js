// // TODO: Create a function that returns a license badge baseod n which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// // function generateMarkdown(data) {
// //   return `# ${data.title}

// // `;
// // }

export default generateMarkdown;

function generateMarkdown(data) {
  `
  # Title
  ${data.Title}

  #License
  
  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Features](#features)
  -[Contributing](#contribute)
  -[Test](#testing)
  -[Information](#info)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.use}

  ## License

  ## Features
  ${data.features}

  ## Contribute
  ${data.contribute}

  ## Testing
  ${data.test}

  ## Information
  ${data.github}
  ${data.email}
  ${data.name}
  `;
}
