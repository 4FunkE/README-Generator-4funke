//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  - Deployed Site --> 

  ## Usage
  ${data.usage}
  ![alt text](assets/images/screenshot.png)

  ## Credits
  ${data.credits}

  ## License
  This application is covered under the ${data.license} license. [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  ## Badges
  ${data.badges}

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For additional questions, contact me through my [GitHub profile](https://github.com/${data.githubUsername}) or via email at ${data.email}.
`;
}

//to export the markdown
module.exports = generateMarkdown;
