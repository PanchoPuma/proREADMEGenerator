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

// Functions to extract and create information for the differnet sections

    // main section (description)
    const renderDescriptionSection = description => {
      if (description) {
          return `${description}`;
      } 
    };

    // table of contents
    const TableOfContents = tableContentsArr => {
        let contentsList = '';
        tableContentsArr.forEach((item) => {
            if (item.content) {
                contentsList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
                `;
            }
        });
        return contentsList;
    };

    // installation section
    const renderInstallationSection = install => {
        if (install) {
            return `To use this application, please install: ${install}`
        } else {
            return '';
        }
    };
    // usage section
    const renderUsageSection = usage => {
        if (usage) {
            return `${usage}`
        }
    };
    // Contributing section
    const renderContributingSection = contributing => {
      if (contributing) {
          return `${contributing}`
      }
  };
    // Test
    const renderTestSection = test => {
        if (test) {
            return `To run tests on this application, please install ${test} and run \`npm run test\` from the command line.`
        } else {
            return '';
        };
    };

    // Questions 
    const renderQuestionsSection = (email, github) => {
      if (email) {
          return `If you have any questions about the repo, please contact me via email at ${email}. You can find more of my work on my GitHub, [${github}](https://github.com/${github}/).`
      } else {
          return '';
      }
    };




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let readmeContents = '';
    const detailSectionArr = [
        {
            header: 'Installation',
            content: renderInstallationSection(data.installation)
        },
        {
            header: 'Usage',
            content: renderUsageSection(data.usage)
        },
        {
            header: 'License',
            content: renderLicenseSection(data.license)
        },
        {
            header: 'Contributing', 
            content: renderContributingSection(data.contributing)
        },
        {
            header: 'Tests',
            content: renderTestSection(data.tests)
        },
        {
            header: 'Questions',
            content: renderQuestionsSection(data.questions, data.github,)
        },
    ];

    // adds each README section if contents for the section exists
    detailSectionArr.forEach((sectionItem) => {
        if (sectionItem.content) {
        readmeContents += `### ${sectionItem.header}
        ${sectionItem.content}
    
        `;
        }
    });

return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${renderDescriptionSection(data.description)}
## Contents
${TableOfContents(detailSectionArr)}
${readmeContents}

`;

    
 
}

module.exports = generateMarkdown;
