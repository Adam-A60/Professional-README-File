// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache") {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  } else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else  {
    return " ";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "Boost") {
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license === "BSD") {
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    } else  {
      return " ";
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license) {
  return license;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title}  ${renderLicenseBadge(data.license)}


  ## Description
${data.description}


  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

  ## Installation
${data.installation}

  ## Usage
${data.Usage}

  ## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

  ## Contributing
${data.contribution}

  ## Test
${data.test}

  ## Questions
  ${data.githubLink}

  ${data.email}
`;
}

export default generateMarkdown;
