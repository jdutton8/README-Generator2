const questions = require("./questions");
const inquirer = require('inquirer');
const fs = require('fs');



function askQuestions() {
    inquirer.prompt(questions).then(function(data) {
        const fileName = "./response/README.md";
        const title = "# " + data.projectName + "\n\n";

        const tableContents = "## Table of Contents\n [Description](#description)\n\n [Usage](#usage)\n\n [Installation](#installation)\n\n [Contribution Guidelines](#guidelines)\n\n [Tests](#tests)\n\n [Licenses](#licenses)\n\n [Questions](#questions)\n\n";
        const description = `## Description\n ${data.Description}\n\n`;
        const usage = `## Usage\n ${data.Usage}\n\n`;
        const install = `## Installation\n ${data.Installation}\n\n`;
        const guidelines = `## Guidelines\n ${data.Guidelines}\n\n`;
        const tests = `## Tests\n ${data.Tests}\n\n`;
        const license = `## Licenses\n This project is licensed under ${data.License}\n\n`;
        const questions = `## Questions\n Please direct any questions to:\n\n GitHub: ${data.userName}\n\n Email: ${data.Email}`;

        let doc = title + tableContents + description + usage + install + guidelines + tests + license + questions;

        fs.writeFile(fileName, doc, (err) =>
        err ? console.log(error) : console.log("Success!"));
    });
}

function main(){
    console.log(questions);
    askQuestions();
}

main();