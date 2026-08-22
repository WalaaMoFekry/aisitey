import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const filePath = path.join(process.cwd(), 'contexts', `${id}-template.md`);
  
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown',
      'Content-Disposition': `attachment; filename="${id}-template.md"`,
    },
  });
}