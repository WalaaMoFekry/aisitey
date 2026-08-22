import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ templateId: string }> }
) {
  const { templateId } = await params;

  const templateContent = getTemplateContent(templateId);

  if (!templateContent) {
    return NextResponse.json(
      { error: 'Template not found' },
      { status: 404 }
    );
  }

  return new NextResponse(templateContent, {
    headers: {
      'Content-Type': 'text/markdown',
      'Content-Disposition': `attachment; filename="${templateId}.md"`,
    },
  });
}

function getTemplateContent(templateId: string): string | null {
  const templates: Record<string, string> = {
    'project-overview': `# Project Overview\n\n## Overview\nWrite your project overview here...`,
    'architecture': `# Architecture\n\n## Stack\n...`,
    'ui-context': `# UI Context\n\n## Theme\n...`,
    'code-standards': `# Code Standards\n\n## General\n...`,
    'ai-workflow-rules': `# AI Workflow Rules\n\n## Scoping\n...`,
    'memory': `# Project Memory\n\n## Decisions\n...`,
    'progress-tracker': `# Progress Tracker\n\n## Current Phase\n...`,
  };

  return templates[templateId] || null;
}