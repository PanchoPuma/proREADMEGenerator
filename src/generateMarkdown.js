// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
      return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`;
      } else {
      return '';
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
      return `![${license} License](https://opensource.org/licenses/MIT)`;
    } else if (license === "GNU") {
      return `![${license} License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    } else if (license === "ISC") {
      return `![${license} License](https://www.isc.org/licenses/)`;
    } else if (license === "Apache 2.0") {
      return `![${license} License](https://www.apache.org/licenses/LICENSE-2.0)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
      return `This application is licensed under the ${license} license.`;
    } else {
      return '';
      }
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;
