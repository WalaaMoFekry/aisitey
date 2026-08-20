"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAisiteyFolder = ensureAisiteyFolder;
exports.writeFile = writeFile;
exports.fileExists = fileExists;
exports.readFile = readFile;
exports.getAisiteyPath = getAisiteyPath;
exports.listAisiteyFiles = listAisiteyFiles;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
async function ensureAisiteyFolder() {
    const aisiteyPath = path_1.default.join(process.cwd(), '.aisitey');
    if (!fs_extra_1.default.existsSync(aisiteyPath)) {
        await fs_extra_1.default.ensureDir(aisiteyPath);
        console.log(chalk_1.default.green('✅ Created .aisitey folder'));
    }
    return aisiteyPath;
}
async function writeFile(filePath, content) {
    try {
        await fs_extra_1.default.writeFile(filePath, content, 'utf8');
        console.log(chalk_1.default.green(`✅ Created ${path_1.default.basename(filePath)}`));
    }
    catch (error) {
        console.error(chalk_1.default.red(`❌ Failed to create ${path_1.default.basename(filePath)}`));
        throw error;
    }
}
async function fileExists(filePath) {
    return fs_extra_1.default.pathExists(filePath);
}
async function readFile(filePath) {
    try {
        return await fs_extra_1.default.readFile(filePath, 'utf8');
    }
    catch (error) {
        console.error(chalk_1.default.red(`❌ Failed to read ${path_1.default.basename(filePath)}`));
        throw error;
    }
}
function getAisiteyPath() {
    return path_1.default.join(process.cwd(), '.aisitey');
}
async function listAisiteyFiles() {
    const aisiteyPath = getAisiteyPath();
    if (!fs_extra_1.default.existsSync(aisiteyPath)) {
        return [];
    }
    return fs_extra_1.default.readdirSync(aisiteyPath);
}
