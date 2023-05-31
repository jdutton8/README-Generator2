const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "projectName",
        default: "README Generator" 
    },
    {
        type: "list",
        message: "What license does your project use?",
        name: "License",
        choices: [
            {
            name: "MIT",
            value: 0,
            }, 
            {
            name: "APACHE 2.0",
            value: 1,  
            },
            {
            name: "Artistic License 2.0",
            value: 2,
            },
            {
            name: "None",
            value: 3,
            },
        ],

    },
    {
        type: "input",
        message: "Please provide a short description of your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "How does the user use your project?",
        name: "Usage",
    },
    {
        type: "input",
        message: "Please provide any instructions for installing necessary files.",
        name: "Installation",
    },
    {
        type: "input",
        message: "Are there any guidelines for someone to contribute?",
        name: "Guidelines",
    },
    {
        type: "input",
        message: "What tests can be run on this project?",
        name: "Tests",
    },
    {
        type: "input",
        message: "what is your GitHub user name?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email",
    }

]

module.exports = questions;