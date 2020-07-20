// create the license badge
const generateBadge = license => {
    switch(license){

    case "Apache":
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;

    case "Boost":
        return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        break;
    
    case "BSD 3-Clause":
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        break;

    case "BSD 2-Clause":
        return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        break;

    case "GPL":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;

    case "IBM":
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        break;

    case "ISC":
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
        break;

    case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;

    case "Mozilla":
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;

    case "Eclipse":
        return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        break;

    default:
        return ``;
    }
}
  module.exports = readmeData => {

    //console.log(readmeData);

    // destructure page data by section
    const { title, description, install, usage, contribution, test, license, github, email} = readmeData;
  
    return`# ${title}

## Description
${generateBadge(license)}
${description}

## Table of Contents
* [Installation Instructions](#Installation-Instructions)
* [Usage Information](#Usage-Information)
* [Contribution Guidelines](#Contribution-Guidelines)
* [Test Instructions](#Test-Instructions)
* [License](#License)
* [GitHub Profile](#Questions)
* [Email Contact](#Questions)

### Installation Instructions
${install}

### Usage Information
${usage}

### Contribution Guidelines
${contribution}

### Test Instructions
${test}

### License
This program is covered under the ${license} license.

### Questions?

#### GitHub Profile
[link](https://github.com/${github})

#### Email
${email}
    `;
  };
  