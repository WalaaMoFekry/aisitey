"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStatus = showStatus;
const chalk_1 = __importDefault(require("chalk"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const requiredFiles = [
    'project-overview.md',
    'architecture.md',
    'ui-context.md',
    'code-standards.md',
    'ai-workflow-rules.md',
    'memory.md',
    'progress-tracker.md',
];
function showStatus() {
    console.log(chalk_1.default.bold('\n📊 aisitey Project Status\n'));
    const aisiteyPath = path_1.default.join(process.cwd(), '.aisitey');
    if (!fs_extra_1.default.existsSync(aisiteyPath)) {
        console.log(chalk_1.default.red('❌ No .aisitey folder found'));
        console.log(chalk_1.default.gray('Run: aisitey init to create project context\n'));
        return;
    }
    const files = fs_extra_1.default.readdirSync(aisiteyPath);
    console.log(chalk_1.default.blue('📁 .aisitey/'));
    let completedCount = 0;
    requiredFiles.forEach((file) => {
        if (files.includes(file)) {
            console.log(chalk_1.default.green(`  ✅ ${file}`));
            completedCount++;
        }
        else {
            console.log(chalk_1.default.red(`  ❌ ${file} (missing)`));
        }
    });
    // Check for extra files
    const extraFiles = files.filter((file) => !requiredFiles.includes(file));
    if (extraFiles.length > 0) {
        console.log(chalk_1.default.gray('\n📎 Additional files:'));
        extraFiles.forEach((file) => {
            console.log(chalk_1.default.gray(`  • ${file}`));
        });
    }
    // Progress
    const percentage = Math.round((completedCount / requiredFiles.length) * 100);
    console.log(chalk_1.default.bold(`\n📈 Progress: ${completedCount}/${requiredFiles.length} files (${percentage}%)`));
    // Status
    if (percentage === 100) {
        console.log(chalk_1.default.green('✅ Project context is complete!\n'));
    }
    else if (percentage > 50) {
        console.log(chalk_1.default.yellow('⚠️  Project context is partially complete\n'));
    }
    else {
        console.log(chalk_1.default.red('❌ Project context needs more work\n'));
    }
    // Check for content in files
    console.log(chalk_1.default.gray('Tip: Run aisitey list to see available templates'));
    console.log(chalk_1.default.gray('     Run aisitey add context <name> to add templates\n'));
}
