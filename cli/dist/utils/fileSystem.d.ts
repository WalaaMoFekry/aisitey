export declare function ensureAisiteyFolder(): Promise<string>;
export declare function writeFile(filePath: string, content: string): Promise<void>;
export declare function fileExists(filePath: string): Promise<boolean>;
export declare function readFile(filePath: string): Promise<string>;
export declare function getAisiteyPath(): string;
export declare function listAisiteyFiles(): Promise<string[]>;
