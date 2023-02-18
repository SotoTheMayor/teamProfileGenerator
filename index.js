const inquirer = require('inquirer')
const fs = require('fs')
let final;

function Employees(data) {
    this.name = data.name;
    this.id = data.id;
    this.email = data.email;
    this.addInfo = data.addInfo;
    this.role = data.role;
}

writeManager();

function addStaff() {

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
        writeEngineer(data)
    } else if (data.addEmployee == `Intern`) {
        writeIntern(data);
    } else {
        createFile();
    }
})
}

function writeManager() {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the team manager's name?`,
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the team manager's employee ID?`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the team manager's email address?`,
        },
        {
            type: `input`,
            name: `addInfo`,
            message: `What is the team manager's office number?`,
        },
    ])
    .then((data) => {
        data.role = `Manager`;
        final = {...final, [data.name]: data}
        console.log(final)
        addStaff(final)
    })
}

function writeEngineer() {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the engineer's name?`,
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the engineer's employee ID?`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the engineer's email address?`,
        },
        {
            type: `input`,
            name: `addInfo`,
            message: `What is the engineer's Github username?`,
        },
    ])
    .then((data) => {
        data.role = `Engineer`;        
        final = {...final, [data.name]: data}
        console.log(final)
        addStaff(final)
    })
}

function writeIntern() {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the intern's name?`,
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the intern's employee ID?`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the intern's email address?`,
        },
        {
            type: `input`,
            name: `addInfo`,
            message: `Where does the intern attend school?`,
        },
    ])
    .then((data) => {
        data.role = `Intern`;
        final = {...final, [data.name]: data}
        console.log(final)
        addStaff(final)
    })
}

function createFile() {
    fs.writeFile(`./dist/index.html`, JSON.stringify(final, null, `\t`), (err) => {
        err ? console.log(err) : console.log(`Success!`)
    })
    return;
}