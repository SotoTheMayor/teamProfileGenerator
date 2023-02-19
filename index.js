const inquirer = require('inquirer')
const fs = require('fs')
const buildPage = require(`./lib/buildPage`);

const test = require(`./test`);


let final;

const initialize = () => {
    return inquirer.prompt([
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
    .then(data => {
        data.role = `Manager`;
        final = {...final, [data.name]: data}
        addStaff(final)
        return;
    })
}

const addStaff = () => {
    console.log(`=======================================================`)
return inquirer.prompt([
    {
        type: `list`,
        name: `addEmployee`,
        message: `Any other employees? Select from below:`,
        choices: [`Engineer`, `Intern`, `No other employees`]
    },
])
.then(data => {
    console.log(final)
    if (data.addEmployee == `Engineer`) {
        writeEngineer(data)
    } else if (data.addEmployee == `Intern`) {
        writeIntern(data)
    } else {
        exitFunc();
    }
})
}

const writeEngineer = () => {
    return inquirer.prompt([
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
    .then(data => {
        data.role = `Engineer`;        
        final = {...final, [data.name]: data}
        addStaff(final)
        return;
    })
}

const writeIntern = () => {
    return inquirer.prompt([
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
    .then(data => {
        data.role = `Intern`;
        final = {...final, [data.name]: data}
        addStaff(final)
        return;
    })
}

const createFile = html => {
    fs.writeFile(`./dist/index.html`, html, (err) => {
        err ? console.log(err) : console.log(`Success!`)
    })
    return;
}

initialize()

exitFunc()
.then(console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++`))
// .then(data =>  {
//     return buildPage(data);
//     return test(data)
// })
// .then(html =>  {
//     return createFile(html);
// })