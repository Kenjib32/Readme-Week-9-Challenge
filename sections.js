const badges = require('./badges');


module.exports = [
    {
        name: 'title',
        message: 'Please enter the project title for the README:',
        type: 'input',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please select the license badges you would like to display:',
        choices: badges,
    },
    {
        name: 'description',
        message: 'Please enter the project description:',
        type: 'input',
    },
    {
        name: 'installation',
        message: 'Please provide the installation instructions:',
        type: 'input',
    },
    {
        name: 'usage',
        message: 'Please describe the projects usage:',
        type: 'input', 
    },
    {
        name: 'contributors',
        message: 'Please list the contributing partners:',
        type: 'input',
    },
    {
        name: 'testing',
        message: 'Please provide the testing instructions:',
        type: 'input',
    },
    {
        name: 'deployment',
        message: 'Please provide the deployment link for your project:',
        type: 'input',
    },
    {
        name: 'github',
        message: 'Please provide your Github username:',
        type: 'input',
    },
    {
        name: 'email',
        message: 'Please provide your email address:',
        type: 'input',
    },
];
