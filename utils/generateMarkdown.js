export default generateMarkdown;

function renderLicenses(license) {
  if (license.name === "MPL 2.0") {
    license.link = "https://opensource.org/licenses/MPL-2.0";
    license.badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else if (license.name === "MIT") {
    license.link = "https://opensource.org/licenses/MIT";
    license.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license.name === "Apache 2.0") {
    license.link = "https://opensource.org/licenses/Apache-2.0";
    license.badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else {
    license.link = "";
    license.badge = "";
  }
}

function generateMarkdown(data) {
  let license = {
    name: `${data.license}`,
    badge: "",
    link: "",
  };
  renderLicenses(license);

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
  -[Information](#information)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.use}

  ## License
  ${license.name}

  ${license.badge}

  This app is licensed under the ${license.name} License. 
  
  Please click (${license.link}) for more info.

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
