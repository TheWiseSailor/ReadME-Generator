function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD') {
    licenseBadge = '[![License: BSD](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }

  return licenseBadge;
}

function renderLicenseLink(license) {
  let licenseLink = '';

  if (license === 'MIT') {
   // licenseLink = 'Licensed under the [MIT License](https://opensource.org/licenses/MIT).';
  } else if (license === 'Apache 2.0') {
    licenseLink = 'Licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
  } else if (license === 'GPL 3.0') {
    licenseLink = 'Licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).';
  } else if (license === 'BSD') {
    licenseLink = 'Licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).';
  }

  return licenseLink;
}

function renderLicenseSection(license) {
  if (license) {
    return `## License\n\n${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}
function generateMarkdown(data) {
  console.log(data);
  return `
  # Project: ${data.Name} 
  ## Project Description 
  ${data.description} 
  ## Table of Contents 
   [Installation Guide](#installation)  <br>
   [Usage Instructions](#usage) <br>
   [License Details](#license)  <br>
   [Project Badges](#badges)  <br>
   [Contributing Guidelines](#contributing)  <br>
  [Testing Procedures](#tests)  <br>
   [Contact Information](#questions)  <br>

  ## Installation Guide 
  ${data.installation}

  ## Usage Instructions 
  ${data.usage}

  ## 
  ${renderLicenseSection(data.license)} <br> 

  ${renderLicenseBadge(data.license)} 


  ## Testing Procedures 
  <br>
  ${data.tests}

  ## Contact Information 
  ${data.email}  <br>
 [${data.userName}](https://github.com/${data.userName}/)  
  `;
}

module.exports =generateMarkdown;