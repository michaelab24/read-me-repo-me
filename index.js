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
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description'
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What are the usage instructions for your project?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Are there any collaborators on your project?',
    name: 'credits'
  },
  {
    type: 'input',
    message: 'Are there any licenses attached to your project?',
    name: 'licenses'
  },
  {
    type: 'input',
    message: 'Please add any badges you may have.',
    name: 'badges'
  },
  {
    type: 'input',
    message: 'If the project has a lot of features, please list them here:',
    name: 'features'
  },
  {
    type: 'checkbox',
    message: 'If you created an application or package, would like other developers to contribute it?',
    name: 'contributors',
    choices: ['Yes', 'No']
  },
  {
    type: 'input',
    message: 'Please provide a test for your project',
    name: 'test'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, "utf8")
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (answers) {
      console.log(answers.title)
      console.log(answers.description)
      console.log(answers.installation)
      console.log(answers.usage)
      console.log(answers.credits)
      console.log(answers.licenses)
      console.log(answers.badges)
      console.log(answers.features)
      console.log(answers.contributors)
      console.log(answers.test)
      const data = { ...answers }
      console.log(data)
      const output = generateMarkdown(data)
      console.log(output)
      writeToFile("readme.md", output)
    })
}

// Function call to initialize app
init();
