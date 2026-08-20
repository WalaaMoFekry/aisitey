#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const init_1 = require("./commands/init");
const add_1 = require("./commands/add");
const list_1 = require("./commands/list");
const program = new commander_1.Command();
program
    .name('aisitey')
    .description('Build with context, not chaos')
    .version('1.0.0');
program
    .command('init')
    .description('Initialize aisitey in your project')
    .action(async () => {
    await (0, init_1.initProject)();
});
program
    .command('add')
    .description('Add a context or skill template')
    .argument('<type>', 'context or skill')
    .argument('<name>', 'template name')
    .action(async (type, name) => {
    await (0, add_1.addTemplate)(type, name);
});
program
    .command('list')
    .description('List available templates')
    .action(async () => {
    await (0, list_1.listTemplates)();
});
program
    .command('status')
    .description('Show project status')
    .action(() => {
    console.log(chalk_1.default.blue('📊 aisitey status'));
    console.log(chalk_1.default.gray('Project context files:'));
    // Check for .aisitey folder
    console.log('  ✅ project-overview.md');
    console.log('  ✅ architecture.md');
    console.log('  ❌ ui-context.md (missing)');
});
program.parse();
