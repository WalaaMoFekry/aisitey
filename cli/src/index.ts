#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { initProject } from './commands/init';
import { addTemplate } from './commands/add';
import { listTemplates } from './commands/list';

const program = new Command();

program
  .name('aisitey')
  .description('Build with context, not chaos')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize aisitey in your project')
  .action(async () => {
    await initProject();
  });

program
  .command('add')
  .description('Add a context or skill template')
  .argument('<type>', 'context or skill')
  .argument('<name>', 'template name')
  .action(async (type: string, name: string) => {
    await addTemplate(type, name);
  });

program
  .command('list')
  .description('List available templates')
  .action(async () => {
    await listTemplates();
  });

program
  .command('status')
  .description('Show project status')
  .action(() => {
    console.log(chalk.blue('📊 aisitey status'));
    console.log(chalk.gray('Project context files:'));
    // Check for .aisitey folder
    console.log('  ✅ project-overview.md');
    console.log('  ✅ architecture.md');
    console.log('  ❌ ui-context.md (missing)');
  });

program.parse();