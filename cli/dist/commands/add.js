"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTemplate = addTemplate;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const availableTemplates = {
    context: ['saas', 'ecommerce', 'dashboard', 'blog', 'portfolio'],
    skill: ['authentication', 'payment', 'ai-integration', 'notifications'],
};
async function addTemplate(type, name) {
    const spinner = (0, ora_1.default)(`Adding ${type}: ${name}...`).start();
    try {
        // Check if type is valid
        if (!availableTemplates[type]) {
            spinner.fail(chalk_1.default.red(`Invalid type: ${type}`));
            console.log(chalk_1.default.gray('Valid types: context, skill'));
            return;
        }
        // Check if template exists
        if (!availableTemplates[type].includes(name)) {
            spinner.fail(chalk_1.default.red(`Template not found: ${name}`));
            console.log(chalk_1.default.gray('Available templates:'));
            availableTemplates[type].forEach((t) => {
                console.log(chalk_1.default.gray(`  - ${t}`));
            });
            return;
        }
        // Create .aisitey folder if it doesn't exist
        await fs_extra_1.default.ensureDir(path_1.default.join(process.cwd(), '.aisitey'));
        // Add template (this would fetch from GitHub in real implementation)
        const content = `# ${name} ${type}\n\nTemplate content coming soon...`;
        const fileName = type === 'context'
            ? `${name}-context.md`
            : `${name}-skill.md`;
        await fs_extra_1.default.writeFile(path_1.default.join(process.cwd(), '.aisitey', fileName), content);
        spinner.succeed(chalk_1.default.green(`Added ${type}: ${name}`));
        console.log(chalk_1.default.gray(`  File: .aisitey/${fileName}`));
    }
    catch (error) {
        spinner.fail(chalk_1.default.red('Failed to add template'));
        console.error(error);
    }
}
