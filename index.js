const inquirer = require ('inquirer');
const generateMarkdown =require ('./generateMarkDown');
const fs = require('fs');
const questions = [
  {
      type:'input',
      name:'email',
      message: 'what is your email address?',
  },
  {
      type: 'input',
      name:'github',
      message: 'What is your Github username?'
  },

{
  type:'input',
  name:'title',
  message:'What is the title of your project?',
},
{
  type: 'input',
  name: 'description',
  message: 'please provide a brief description of your project:',
},

{
  type: 'input',
  name: 'installation',
  message: 'Please provide installation instructions for your project:',
},
{
  type:'input',
  name: 'usage',
  message:'Please provide usage instructions for your project:',
},
{
  type: 'list',
  name: 'license',
  choices: ['MIT', 'Apache','GPL', 'BSD'],

},

]

