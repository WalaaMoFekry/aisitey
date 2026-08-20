"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTemplates = listTemplates;
const chalk_1 = __importDefault(require("chalk"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const availableTemplates = {
    context: ['saas', 'ecommerce', 'dashboard', 'blog', 'portfolio', 'mobile-app'],
    skill: ['authentication', 'payment', 'ai-integration', 'notifications', 'file-upload', 'email'],
};
async function listTemplates() {
    console.log(chalk_1.default.bold('\n📚 Available Templates\n'));
    console.log(chalk_1.default.blue('📄 Contexts (Free):'));
    availableTemplates.context.forEach((template) => {
        console.log(chalk_1.default.gray(`  • ${template}`));
    });
    console.log(chalk_1.default.blue('\n🛠️ Skills (Premium):'));
    availableTemplates.skill.forEach((template) => {
        console.log(chalk_1.default.yellow(`  • ${template} (requires subscription)`));
    });
    console.log(chalk_1.default.gray('\nUse: aisitey add context <name>'));
    console.log(chalk_1.default.gray('     aisitey add skill <name>\n'));
    // Check if .aisitey folder exists in current directory
    const aisiteyPath = path_1.default.join(process.cwd(), '.aisitey');
    if (fs_extra_1.default.existsSync(aisiteyPath)) {
        console.log(chalk_1.default.green('\n✅ Current project has .aisitey folder'));
        const files = fs_extra_1.default.readdirSync(aisiteyPath);
        console.log(chalk_1.default.gray('\nProject context files:'));
        files.forEach((file) => {
            console.log(chalk_1.default.gray(`  • ${file}`));
        });
    }
    else {
        console.log(chalk_1.default.yellow('\n⚠️  No .aisitey folder found in current directory'));
        console.log(chalk_1.default.gray('Run: aisitey init to create project context'));
    }
}
