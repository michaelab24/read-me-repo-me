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
        return false;
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
    type: 'input',
    message: 'Please add any licenses here.',
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
    name: 'badgeConfirm',
    message: 'Are there any badges you would like to add?',
    default: true
  },
  {
    type: 'input',
    message: 'Please add any badges you may have.',
    name: 'badges',
    when: ({ badgeConfirm }) => {
      if (badgeConfirm) {
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
  name: 'features',
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
    message: 'Please provide a test for your project if any',
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
