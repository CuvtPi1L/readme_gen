const fs = require('fs')
const inquirer = require('inquirer')

const questions =[{
        type: 'input',
        message: '#Description',
        name: 'a',
      },
      {
        type: 'input',
        message: '#Installation',
        name: 'b',
      },
      {
        type: 'input',
        message: 'Usage',
        name: 'c',
      },
      {
        type: 'input',
        message: 'License',
        name: 'd',
      },
      {
        type: 'input',
        message: '#Contributing',
        name: 'e',
      },
      {
        type: 'input',
        message: '#Tests',
        name: 'f',
      },
      {
        type: 'input',
        message: '#Questions',
        name: 'g',
      },
      {
        type: 'input',
        message: 'email',
        name: 'h',
      },
    ]

let outputToHtml

inquirer
        .prompt(questions)
        .then( (raw) => {
                outputToHtml =  `
                # ${raw.a}

                ## Table of Contents
                -[Description](#Description)
                -[Installation] (#Installation)
                -[Usage] (#Usage)
                -[License] (#License)
                -[Contributing] (#Contributing)
                -[Tests] (#Tests)
                -[Questions] (#Questions)

                ## Description
                ${raw.b}

                ## Installation
                ${raw.c}
                ## Usage
                ${raw.d}
                ## License
                ${raw.e}
                ## Contributing
                ${raw.f}
                ## Tests
                ${raw.g}
                ## Questions
                ${raw.h}
                
                `;
                        
                
                let writeHTML = (jeb) => {fs.writeFile('index.html', jeb, ()=> console.log('got it done!')) }
                writeHTML(outputToHtml)
        })

        




