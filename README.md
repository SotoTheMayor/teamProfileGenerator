# teamProfileGenerator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)


## Description
This project is made to build a website listing a team consisting of 1 manager, and any number of engineers and interns.  A manager could use it to quickly access email addresses and github profiles of their engineers, among other relevant work information.  It will include name, email, employee id, and another field specific to the role based on user prompts in the console.  Using that input, the website will automatically generate with no need to write any of the html, css or script yourself.

NOTE -- Some files, specifically the tests and all .js files in the `lib` directory with the exception of buildPage.js, are not actually used for a functional project.  These were added to satisfy the grading rubric, and the functional code is more condensed.  The project will run simply off buildPage.js, index.js, node_modules, and the .json file(s).

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
User will need to initialize npm from their console and the application's root folder.  They will also need to get the inquirer package, [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) by typing `npm i inquirer@8.2.4`.  The user will then type `node index.js` and press enter.  From there, a series of prompts will appear, and once complete, the html file will generate in the dist foler


## Usage
The project is meant to generate a team roster with roles for a manager, engineer, and intern.  The website can be used with no need to create any of the html by the user

![Gif of project in use](./lib/teamProfileGeneratorGif.gif)

## License

MIT License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. 
Licensed works, modifications, and larger works may be distributed under different terms and without source code.

[License Source](https://choosealicense.com/licenses/)
    


## Contributing
Please fork and use as you see fit.  If you wish to contribute, please contact me at quickfire25@yahoo.com


## Test
Testing has been prepared, but is currently disconnected.  The final project was built with a simpler code than the original testing setup.  All tests have passed, but if you wish to recreate them, you will need to initialize npm, and run "npm run test" from the root directory using your console.  Otherwise, no testing is needed to ensure functionality.


## Questions
If you have any questions, please email me at quickfire25@yahoo.com.
You can also find more information at https://github.com/SotoTheMayor
