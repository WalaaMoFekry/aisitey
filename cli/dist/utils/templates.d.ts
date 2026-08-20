export interface Template {
    name: string;
    type: 'context' | 'skill';
    description: string;
    content: string;
    premium?: boolean;
}
export declare function getTemplateContent(templateName: string, projectName?: string): string;
export declare function getAvailableContexts(): string[];
export declare function isContextTemplate(name: string): boolean;
