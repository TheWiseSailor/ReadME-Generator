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
//finish the rest to where you do a series of const and functions to where it prompts the user for a different variaty of things