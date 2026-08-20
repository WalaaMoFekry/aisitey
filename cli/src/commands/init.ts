import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';

export async function initProject() {
  console.log(chalk.bold('\n🚀 Welcome to aisitey!\n'));
  console.log(chalk.gray('Build with context, not chaos.\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?',
      validate: (input) => {
        if (input.length < 2) {
          return 'Project name must be at least 2 characters';
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'techStack',
      message: 'What is your tech stack?',
      choices: [
        'Next.js + TypeScript',
        'Vue 3 + TypeScript',
        'React + TypeScript',
        'Laravel',
        'Flutter',
        'Custom',
      ],
    },
    {
      type: 'confirm',
      name: 'createFolder',
      message: 'Create a new folder for this project?',
      default: true,
    },
  ]);

  const spinner = ora('Creating project structure...').start();

  try {
    const projectPath = answers.createFolder
      ? path.join(process.cwd(), answers.projectName)
      : process.cwd();

    // Create .aisitey folder
    await fs.ensureDir(path.join(projectPath, '.aisitey'));

    // Create all template files
    const templates = [
      'project-overview',
      'architecture',
      'ui-context',
      'code-standards',
      'ai-workflow-rules',
      'memory',
      'progress-tracker',
    ];

    for (const template of templates) {
      const content = getTemplateContent(template, answers.projectName);
      await fs.writeFile(
        path.join(projectPath, '.aisitey', `${template}.md`),
        content
      );
    }

    spinner.succeed(chalk.green('Project initialized successfully!'));

    console.log('\n📁 Created files:');
    console.log(chalk.gray('  .aisitey/'));
    templates.forEach((template) => {
      console.log(chalk.gray(`    ├── ${template}.md`));
    });

    console.log('\n✨ Next steps:');
    console.log(chalk.blue('  1. Edit your project-overview.md'));
    console.log(chalk.blue('  2. Define your architecture'));
    console.log(chalk.blue('  3. Start building with AI'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to initialize project'));
    console.error(error);
  }
}

function getTemplateContent(template: string, projectName: string): string {
  // Basic templates - will be replaced with full versions
  const templates: Record<string, string> = {
    'project-overview': `# ${projectName}

## Overview

Write your project overview here.

## Goals

1. Goal one
2. Goal two

## Scope

### In Scope
- What you are building

### Out of Scope
- What you are not building
`,
    'architecture': `# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | [technology] | [role] |

## System Boundaries
- \`folder/\` — responsibility
`,
    'ui-context': `# UI Context

## Theme

Describe your visual direction here.

## Colors

| Role | CSS Variable | Hex |
| --- | --- | --- |
| Page background | \`--bg-base\` | \`#______\` |
`,
    'code-standards': `# Code Standards

## General
- Keep modules small and single-purpose.
- Fix root causes — do not layer workarounds.
`,
    'ai-workflow-rules': `# AI Workflow Rules

## Approach
Build ${projectName} incrementally using spec-driven development.

## Scoping Rules
- Work on one feature unit at a time.
- Keep implementation steps small and verifiable.
`,
    'memory': `# Project Memory

## Project Identity
- Project name: ${projectName}
- Product type: [one line]
- Primary users: [who]
`,
    'progress-tracker': `# Progress Tracker

## Current Phase
- Not started

## Completed
- None yet.

## In Progress
- None yet.
`,
  };

  return templates[template] || '';
}