#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' }); 
    } catch (error) {
        console.error(`Error running command: ${command}`, error);
        return false;
    }

    return true;
}

// Run the command
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/rezpo/create-nxctm-app.git ${repoName}`;
const installDependencies = `cd ${repoName} && npm install`;

// Clone the repo
console.log(`Creating new project ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
    console.error('Failed to checkout repo');
    process.exit(1);
}

// Install dependencies
console.log('Installing dependencies...');
const installDependenciesSuccess = runCommand(installDependencies);
if(!installDependenciesSuccess) {
    console.error('Failed to install dependencies');
    process.exit(1);
}

console.log(`Successfully created new project, please cd ${repoName} and run "npm run dev" to start the application`);
