import inquirer from 'inquirer';

async function main() {
  await inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'RawList',
        message: 'Practice rawlist',
        choices: [1, 2, 3, 4, 5],
      },
    ])
    .then((answers) => {
      console.log(JSON.stringify(answers));
      return answers.RawList;
    });

  console.log();

  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'Input',
        message: 'Practice input',
      },
    ])
    .then((answers) => {
      console.log(JSON.stringify(answers));
      return answers.Input;
    });

  console.log();

  await inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'Confirm',
        message: 'Practice confirm',
      },
    ])
    .then((answers) => {
      console.log(JSON.stringify(answers));
      return answers.Confirm;
    });
}

main();
