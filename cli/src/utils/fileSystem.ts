import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

export async function ensureAisiteyFolder(): Promise<string> {
  const aisiteyPath = path.join(process.cwd(), '.aisitey');
  
  if (!fs.existsSync(aisiteyPath)) {
    await fs.ensureDir(aisiteyPath);
    console.log(chalk.green('✅ Created .aisitey folder'));
  }
  
  return aisiteyPath;
}

export async function writeFile(filePath: string, content: string): Promise<void> {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    console.log(chalk.green(`✅ Created ${path.basename(filePath)}`));
  } catch (error) {
    console.error(chalk.red(`❌ Failed to create ${path.basename(filePath)}`));
    throw error;
  }
}

export async function fileExists(filePath: string): Promise<boolean> {
  return fs.pathExists(filePath);
}

export async function readFile(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error(chalk.red(`❌ Failed to read ${path.basename(filePath)}`));
    throw error;
  }
}

export function getAisiteyPath(): string {
  return path.join(process.cwd(), '.aisitey');
}

export async function listAisiteyFiles(): Promise<string[]> {
  const aisiteyPath = getAisiteyPath();
  
  if (!fs.existsSync(aisiteyPath)) {
    return [];
  }
  
  return fs.readdirSync(aisiteyPath);
}