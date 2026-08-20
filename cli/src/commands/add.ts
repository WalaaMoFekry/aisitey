import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';

const availableTemplates = {
  context: ['saas', 'ecommerce', 'dashboard', 'blog', 'portfolio'],
  skill: ['authentication', 'payment', 'ai-integration', 'notifications'],
};

export async function addTemplate(type: string, name: string) {
  const spinner = ora(`Adding ${type}: ${name}...`).start();

  try {
    // Check if type is valid
    if (!availableTemplates[type as keyof typeof availableTemplates]) {
      spinner.fail(chalk.red(`Invalid type: ${type}`));
      console.log(chalk.gray('Valid types: context, skill'));
      return;
    }

    // Check if template exists
    if (!availableTemplates[type as keyof typeof availableTemplates].includes(name)) {
      spinner.fail(chalk.red(`Template not found: ${name}`));
      console.log(chalk.gray('Available templates:'));
      availableTemplates[type as keyof typeof availableTemplates].forEach((t) => {
        console.log(chalk.gray(`  - ${t}`));
      });
      return;
    }

    // Create .aisitey folder if it doesn't exist
    await fs.ensureDir(path.join(process.cwd(), '.aisitey'));

    // Add template (this would fetch from GitHub in real implementation)
    const content = `# ${name} ${type}\n\nTemplate content coming soon...`;
    
    const fileName = type === 'context' 
      ? `${name}-context.md`
      : `${name}-skill.md`;

    await fs.writeFile(
      path.join(process.cwd(), '.aisitey', fileName),
      content
    );

    spinner.succeed(chalk.green(`Added ${type}: ${name}`));
    console.log(chalk.gray(`  File: .aisitey/${fileName}`));
  } catch (error) {
    spinner.fail(chalk.red('Failed to add template'));
    console.error(error);
  }
}