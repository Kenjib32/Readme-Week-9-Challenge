const inquirer = require('inquirer');
const utilities = require('./utilities');
const sections = require('./sections');
const tableOfContents = require('./contents');


// Function to record answers from user and insert into README.
inquirer.prompt(sections).then((answers) => {
    const data = template(answers);
    const filename = `${answers.title.toLowerCase().split(' ').join('')}.md`;
    utilities.writeFile(filename, data);

});

tableOfContents.forEach((item, data) => {
    sections[data].name = item

});


//Function to create README
function template(data) {
    return `
# ${data.title}
${data.license}
${tableOfContents}

## Description
${data.description}

## Installation Instructions
${data.installation} 

## Usage Information
${data.usage} 

## Contributors
${data.contributors}

## Test Instructions
${data.testing} 

## Deployment Link
${data.deployment}

## Questions
I would love to hear your feedback, please don't hesitate to contact me via email at [${data.email}](mailto;${data.email}) or visit my profile on [GitHub](https://github.com/${data.github})
        
## License
This project is protected under ${data.license}, please read through the license terms and conditions.
    `
}


 