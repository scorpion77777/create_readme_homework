// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
// return `# ${data.title}

//`;
//}

//module.exports = generateMarkdown;

//This function generates the markdown document
const generateMarkdown = (data) => {
  //This switch case takes the input of the license prompts and assigns a url to the proper license
  let licenseLink = "";

  switch (data.license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;

    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
      break;

    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;

    case "BSD3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    default:
      licenseLink = "This app has no license.";
  }

  //The beginning of the markdown document creation
  return `
[![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)
## Installation
${data.install}
## Tests
${data.tests}
## Usage
${data.usage}
## Contributing
${data.contribute}
## License
### This app is licensed under the [${data.license}](${licenseLink}) license.
## Questions
* GitHub: [${data.github}](https://github.com/${data.github})
* Link to video: [${data.video}]
* Email: 
[${data.email}](mailto:${data.email})
  `;
};

module.exports = generateMarkdown;
