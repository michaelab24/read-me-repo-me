// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'Slack', 'smoke signal']
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, "utf8")
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(function(answers){
       console.log(answers.title)
       console.log(answers.contact)
       console.log(answers.stack)
       const data={...answers}
       console.log(data)
       const output = generateMarkdown(data)
       console.log(output)
       writeToFile("readme.md", output)
   })
}

// Function call to initialize app
init();
