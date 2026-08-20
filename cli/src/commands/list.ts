import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

const availableTemplates = {
  context: ['saas', 'ecommerce', 'dashboard', 'blog', 'portfolio', 'mobile-app'],
  skill: ['authentication', 'payment', 'ai-integration', 'notifications', 'file-upload', 'email'],
};

export async function listTemplates() {
  console.log(chalk.bold('\n📚 Available Templates\n'));

  console.log(chalk.blue('📄 Contexts (Free):'));
  availableTemplates.context.forEach((template) => {
    console.log(chalk.gray(`  • ${template}`));
  });

  console.log(chalk.blue('\n🛠️ Skills (Premium):'));
  availableTemplates.skill.forEach((template) => {
    console.log(chalk.yellow(`  • ${template} (requires subscription)`));
  });

  console.log(chalk.gray('\nUse: aisitey add context <name>'));
  console.log(chalk.gray('     aisitey add skill <name>\n'));

  // Check if .aisitey folder exists in current directory
  const aisiteyPath = path.join(process.cwd(), '.aisitey');
  if (fs.existsSync(aisiteyPath)) {
    console.log(chalk.green('\n✅ Current project has .aisitey folder'));
    
    const files = fs.readdirSync(aisiteyPath);
    console.log(chalk.gray('\nProject context files:'));
    files.forEach((file) => {
      console.log(chalk.gray(`  • ${file}`));
    });
  } else {
    console.log(chalk.yellow('\n⚠️  No .aisitey folder found in current directory'));
    console.log(chalk.gray('Run: aisitey init to create project context'));
  }
}