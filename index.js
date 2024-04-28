import { Command } from 'commander';
import fs from 'fs';
import inquirer from 'inquirer';

async function getRepos( userName ) {
  const response = await fetch(`https://api.github.com/users/${userName}/repos`);
  const repos = await response.json();
  fs.writeFile(`./${userName}.txt`, JSON.stringify(repos), 'utf8', () => {
    console.log(`The repos of ${userName} added successfully to ${userName}.txt`);
  });
}

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type : "input",
      message : "Write the username ",
      name : "userName"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // answers is object
    //console.log(answers["userName"]);
    getRepos(answers["userName"]);
  })