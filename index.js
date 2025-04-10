#!/usr/bin/env node
import fs from 'fs-extra';
import { execa } from 'execa';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

const projectName = process.argv[2];

if (!projectName) {
    console.error(chalk.red('❌ Provide a valid project name'));
    process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatePath = path.join(__dirname, 'template');
const projectTarget = path.join(process.cwd() + '/' + projectName);

(async() => {
    try {
        console.log(chalk.blue('📂 Creating Project Directory'));
        await fs.copy(templatePath, projectTarget);

        console.log(chalk.white('↘️ Changing the directory to current project'));
        await process.chdir(projectTarget);

        console.log(chalk.green('📦 Installing project dependencies. Please wait...'));
        await execa('npm', ['install']);

        console.log(chalk.cyan('🚀 Starting development server...'));
        await execa('npm', ['start'], { stdio: 'inherit' });
    } catch (err) {
        console.error(chalk.red('[Error'), err);
    }
})();
