// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        // For the following license badges, referred to Github Gist link:
        // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

        if (license === "GNU AGPLv3") {
            // Item 3 from GNU section
            return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
        } else if (license === "GNU GPLv3") {
            // Item 1 from GNU section
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
        } else if (license === "GNU LGPLv3") {
            // Item 4 from GNU section
            return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
        } else if (license === "Apache 2.0") {
            // Item 1 from Apache section
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
        } else if (license === "Boost Software 1.0") {
            // Item 1 from Boost section
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
        } else if (license === "MIT") {
            // Item 1 from MIT section
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        } else {
            // Item 1 from Mozilla section
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
        }
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
    // For the following license links, also referred to the same Github Gist link:
    // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

        if (license === "GNU AGPLv3") {
        // Item 3 from GNU section
            return "https://www.gnu.org/licenses/agpl-3.0";
        } else if (license === "GNU GPLv3") {
        // Item 1 from GNU section
            return "https://www.gnu.org/licenses/gpl-3.0";
        } else if (license === "GNU LGPLv3") {
        // Item 4 from GNU section
            return "https://www.gnu.org/licenses/lgpl-3.0";
        } else if (license === "Apache 2.0") {
        // Item 1 from Apache section
            return "https://opensource.org/licenses/Apache-2.0";
        } else if (license === "Boost Software 1.0") {
        // Item 1 from Boost section
            return "https://www.boost.org/LICENSE_1_0.txt";
        } else if (license === "MIT") {
        // Item 1 from MIT section
            return "https://opensource.org/licenses/MIT";
        } else {
        // Item 1 from Mozilla section
            return "https://opensource.org/licenses/MPL-2.0";
        }
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
    // Receive license name and license link by calling renderLicenseLink() function
    return `
# License
You are currently using the [${license}](${renderLicenseLink(license)}) license.
    `;
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // Receive license badge by calling renderLicenseBadge() function. Initialize as variable
    const licenseBadge = renderLicenseBadge(data.license);
    // Receive license informartion by calling renderLicenseSection() function. Initialize as variable
    const licenseSection = renderLicenseSection(data.license);
  
    return `
# Project Title
${data.title}
${licenseBadge}
  
# Description
${data.description}
  
# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-License)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Contact Information](#-Contact-Information)
  
# Installation
${data.installation}
  
# Usage
${data.usage}
  
${licenseSection}
  
# Contributing 
${data.contributing}
  
# Tests
${data.tests}
  
# Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}
  `;
  }
  module.exports = generateMarkdown;
