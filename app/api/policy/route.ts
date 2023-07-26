import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

async function handler(req: any, res: any) {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/policy.json', 'utf8');
  return NextResponse.json(JSON.parse(fileContents));
}

export { handler as GET, handler as POST };
