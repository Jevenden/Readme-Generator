export default generateMarkdown;

function generateMarkdown(data) {
  return `
  # Title
  ${data.title}
  
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
