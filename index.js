// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
console.log(
  "Welcome to the automated README generator! Answer the following questions to create a README for your project."
);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a brief description of the project",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install the project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use the project?",
    name: "use",
  },
  {
    type: "checkbox",
    message: "Choose a license that will best suit the project:",
    name: "license",
    choices: ["MPL 2.0", "GNL", "Apache", "MIT", "None of the Above"],
  },
  {
    type: "input",
    message: "Please provide a short list of the projects' features",
    name: "features",
  },
  {
    type: "input",
    message: "How can other users contribute to the project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How do you test the project?",
    name: "test",
  },
  {
    type: "input",
    message: "Enter your Github ID",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "email",
  },
  {
    type: "input",
    message: "Enter your name",
    name: "name",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README", generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("README Created!")
    );
  });
}

// Function call to initialize app
init();
