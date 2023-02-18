const inquirer = require('inquirer')
const fs = require('fs')

writeManager();

function initialize(data) {
inquirer.prompt([
    {
        type: `list`,
        name: `addEmployee`,
        message: `Any other employees? Select from below:`,
        choices: [`Engineer`, `Intern`, `No other employees`]
    },
])
.then((data) => {
    if (data.addEmployee == `Engineer`) {
        writeEngineer()
    } else if (data.addEmployee == `Intern`) {
        writeIntern()
    } else {

    fs.writeFile(`./dist/index.html`, JSON.stringify(data, null, `\t`), (err) => {
        err ? console.log(err) : console.log(`Success!`)
    })
    return;
    }
})
}

function writeManager() {
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
    ])
    .then((data) => {
        initialize(data)
    })
}

function writeEngineer() {
    inquirer.prompt([
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
    ])
    .then((data) => {
        initialize(data)
    })
}

function writeIntern() {
    inquirer.prompt([
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
        initialize(data)
    })
}