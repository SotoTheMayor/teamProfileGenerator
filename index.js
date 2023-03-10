//inquirer and fs are needed for prompts and file creation, buildPage is the html compiler
const inquirer = require('inquirer')
const fs = require('fs')
const buildPage = require(`./lib/buildPage.js`);

let final;

//initial function when index.js is launched in node
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

//function for the prompt that asks the user if they want to add an engineer or intern to the team
const addStaff = () => {
return inquirer.prompt([
    {
        type: `list`,
        name: `addEmployee`,
        message: `Any other employees? Select from below:`,
        choices: [`Engineer`, `Intern`, `No other employees`]
    },
])
.then(data => {
    if (data.addEmployee == `Engineer`) {
        writeEngineer(data)
    } else if (data.addEmployee == `Intern`) {
        writeIntern(data)
    } else {
        exitFunc(final)
        .then(final => {
        createFile(final);
    })
    }
})
}

//called if an engineer is chosen from the addStaff function
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

//called if an intern is selected from the addStaff function
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

//writes the final index.html received from buildPage.js
const createFile = final => {
    fs.writeFile(`./dist/index.html`, final, (err) => {
        err ? console.log(err) : console.log(`Success!`)
    })
    return;
}

//called when `node index.js` is typed in the console
initialize()

//called when `no other employee` is selected from addStaff function
const exitFunc = final => {
    return new Promise ((resolve, reject) => {
        resolve(buildPage(final))
    })
}

