import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

const requiredFiles = [
  'project-overview.md',
  'architecture.md',
  'ui-context.md',
  'code-standards.md',
  'ai-workflow-rules.md',
  'memory.md',
  'progress-tracker.md',
];

export function showStatus() {
  console.log(chalk.bold('\n📊 aisitey Project Status\n'));

  const aisiteyPath = path.join(process.cwd(), '.aisitey');

  if (!fs.existsSync(aisiteyPath)) {
    console.log(chalk.red('❌ No .aisitey folder found'));
    console.log(chalk.gray('Run: aisitey init to create project context\n'));
    return;
  }

  const files = fs.readdirSync(aisiteyPath);

  console.log(chalk.blue('📁 .aisitey/'));
  
  let completedCount = 0;
  
  requiredFiles.forEach((file) => {
    if (files.includes(file)) {
      console.log(chalk.green(`  ✅ ${file}`));
      completedCount++;
    } else {
      console.log(chalk.red(`  ❌ ${file} (missing)`));
    }
  });

  // Check for extra files
  const extraFiles = files.filter((file) => !requiredFiles.includes(file));
  if (extraFiles.length > 0) {
    console.log(chalk.gray('\n📎 Additional files:'));
    extraFiles.forEach((file) => {
      console.log(chalk.gray(`  • ${file}`));
    });
  }

  // Progress
  const percentage = Math.round((completedCount / requiredFiles.length) * 100);
  console.log(chalk.bold(`\n📈 Progress: ${completedCount}/${requiredFiles.length} files (${percentage}%)`));

  // Status
  if (percentage === 100) {
    console.log(chalk.green('✅ Project context is complete!\n'));
  } else if (percentage > 50) {
    console.log(chalk.yellow('⚠️  Project context is partially complete\n'));
  } else {
    console.log(chalk.red('❌ Project context needs more work\n'));
  }

  // Check for content in files
  console.log(chalk.gray('Tip: Run aisitey list to see available templates'));
  console.log(chalk.gray('     Run aisitey add context <name> to add templates\n'));
}