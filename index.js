// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the project title?'
},
{
    type: 'input',
    name: 'description',
    message: 'Enter your description!'
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter your installation instructions!'
},
{
    type: 'input',
    name: 'Usage',
    message: 'Enter your usage information!'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Enter your contribution guidelines!'
},
{
    type: 'input',
    name: 'test',
    message:'Enter your test instructions!'
},
{
    type: 'list',
    name:'license',
    message: 'Which license did you use?',
    choices: ["Apache", "Boost","BSD"]
},
{
    type:'input',
    name:'githubLink',
    message:'Enter in your GitHub link!'
},
{
    type:'input',
    name:'email',
    message:'Enter your Email!'
},

]; 


// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile(`./README.md`, generateMarkdown(answers), (err) =>
          err ? console.error(err) : console.log('Provided information entered!')
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {writeToFile(answers)} );
}

// Function call to initialize app
init();
