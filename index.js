const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: `input`,
        name: `managerName`,
        message: `What is the team manager's name?`,
    },
    {
        type: `input`,
        name: `managerID`,
        message: `What is the team manager's employee ID?`,
    },
    {
        type: `input`,
        name: `managerEmail`,
        message: `What is the team manager's email address?`,
    },
    {
        type: `input`,
        name: `managerOffice`,
        message: `What is the team manager's office number?`,
    },
    {
        type: `list`,
        name: `addEmployee`,
        message: `Any other employees? Select from below:`,
        choices: [`Engineer`, `Intern`, `No other employees`]
    },
    {
        type: `input`,
        name: `engineerName`,
        message: `What is the engineer's name?`,
    },
    {
        type: `input`,
        name: `engineerID`,
        message: `What is the engineer's employee ID?`,
    },
    {
        type: `input`,
        name: `engineerEmail`,
        message: `What is the engineer's email address?`,
    },
    {
        type: `input`,
        name: `engineerGit`,
        message: `What is the engineer's Github username?`,
    },
    {
        type: `input`,
        name: `internName`,
        message: `What is the intern's name?`,
    },
    {
        type: `input`,
        name: `internID`,
        message: `What is the intern's employee ID?`,
    },
    {
        type: `input`,
        name: `internEmail`,
        message: `What is the intern's email address?`,
    },
    {
        type: `input`,
        name: `internSchool`,
        message: `Where does the intern attend school?`,
    },
])
.then((data) => {
    fs.writeFile(`./dist/index.html`, JSON.stringify(data, null), (err) => {
        err ? console.log(err) : console.log(`Success!`)
    })
})