// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the title of your project!');
        return fales;
        //questions array     

      }
    }
  },
  {
    type: 'input',
    message: 'What is the description of your project? (*Please enter the links to your github and project here.*)',
    name: 'description'
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What are the usage instructions for your project? (*Please add a screenshot of your project here using ![alt text](assets/images/screenshot.png)',
    name: 'usage'
  },
  {
    type: 'confirm',
    name: 'confirmCollab',
    message: 'Were there any collaborators on this project?',
    default: true
  },
  {
    type: 'input',
    message: 'Please add any collaborators.',
    name: 'credits',
    default: '',
    when: ({ confirmCollab }) => {
      if (confirmCollab) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'licensesConfirm',
    message: 'Are there any licenses attached to your project?',
    default: true
  },
  {
    type: 'list',
    message: 'Please select your license type',
    choices: ['MIT', 'GNU GPLv3', 'Community'],
    name: 'licenses',
    when: ({ licensesConfirm }) => {
      if (licensesConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'featureConfirm',
    message: 'Is there any extra features that you would like to list?',
    default: true
  },
  {
    type: 'input',
    message: 'If the project has a lot of features, please list them here:',
    name: 'features',
    when: ({ featureConfirm }) => {
      if (featureConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    message: 'If you created the application or package, would like other developers to contribute it?',
    name: 'contributeConfirm',
    default: true
  },
  {
    type: 'input',
    message: 'Please write how you would like other developers to contribute.',
    name: 'contribute',
    when: ({ contributeConfirm }) => {
      if (contributeConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Please provide a test for your project if any. If none leave blank.',
    name: 'test'
  },
  {
    type: 'input',
    message: 'If you would like to open your project to any questions, please provide any contact info here. If none leave blank.',
    name: 'questions'
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
      console.log(answers.contribute)
      console.log(answers.test)
      console.log(answers.questions)
      let data = { ...answers }
      if (!answers.confirmCollab) {
        data = { ...data, credits: 'None' }
      }
      if (!answers.featureConfirm) {
        data = { ...data, features: 'No extra features' }
      }
      if (!answers.contributeConfirm) {
        data = { ...data, contribute: 'None' }
      }
      console.log(data)
      const output = generateMarkdown(data)
      console.log(output)
      writeToFile("readme.md", output)
    })
}

// Function call to initialize app
init();
